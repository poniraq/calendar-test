import { Injectable } from '@decorators/di';
import { web as GoogleCreds } from 'config/google_creds';
import { OAuth2Client } from 'google-auth-library';
import { calendar_v3, google } from 'googleapis';
import { User } from 'models';
import { RefreshToken } from 'utils/annotations';


@Injectable()
export class CalendarService {
  private auth: OAuth2Client;
  private calendar: calendar_v3.Calendar;

  constructor() {
    this.auth = new google.auth.OAuth2({
      clientId: GoogleCreds.client_id,
      clientSecret: GoogleCreds.client_secret,
      redirectUri: GoogleCreds.redirect_uris[0]
    });
    this.calendar = google.calendar({
      version: 'v3',
      auth: this.auth
    });
  }

  @RefreshToken()
  list(user: User, syncToken?: string) {
    const params = syncToken ? { syncToken } : { minAccessRole: 'writer' };

    return this.do(user)
      .then(() => this.calendar.calendarList.list(params))
      .then(list => list.data);
  }

  @RefreshToken()
  get(user: User, id: string): Promise<calendar_v3.Schema$Calendar> {
    return this.do(user)
      .then(() => this.calendar.calendars.get({
        calendarId: id
      }))
      .then(result => result.data);
  }

  @RefreshToken()
  events(user: User, id: string, syncToken?: string): Promise<calendar_v3.Schema$Events> {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(now.getDate() + 1);

    const predicate = (event: calendar_v3.Schema$Event) => {
      return event.start && event.start.dateTime && event.end && event.end.dateTime;
    }

    const params = syncToken ? {
      syncToken: syncToken,
      calendarId: id,
      singleEvents: true
    } : {
      calendarId: id,
      singleEvents: true,
      timeMin: now.toISOString(),
      timeMax: tomorrow.toISOString()
    };

    return this.do(user)
      .then(() => this.calendar.events.list(params))
      .then(result => result.data)
      .then((events: calendar_v3.Schema$Events) => {
        events.items = events.items.filter(predicate);
        return events;
      });
  }

  @RefreshToken()
  patchEvent(user: User, calendarId: string, eventId: string, patch: any): Promise<calendar_v3.Schema$Event> {
    return this.do(user)
      .then(() => this.calendar.events.update({
        calendarId,
        eventId,
        requestBody: patch
      }))
      .then(result => result.data)
  }
  // UTILS

  private do(user: User): Promise<void> {
    this.auth.setCredentials({
      access_token: user.accessToken,
      refresh_token: user.refreshToken
    });

    return Promise.resolve();
  }
}
