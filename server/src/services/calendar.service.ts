import { Injectable } from '@decorators/di';
import { web as GoogleCreds } from 'config/google_creds';
import { OAuth2Client } from 'google-auth-library';
import { calendar_v3, google } from 'googleapis';
import { User } from 'models';

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

  getCalendarList(user: User) {
    this.$setCredentials(user);

    return this.calendar
      .calendarList
      .list()
      .then(
        result => result.data,
        err => { throw err }
      );
  }

  getCalendar(user: User, id: string) {
    this.$setCredentials(user);

    return this.calendar
      .calendars
      .get({ calendarId: id })
      .then(
        result => result.data,
        err => { throw err }
      );
  }

  // UTILS
  private $setCredentials(user: User) {
    this.auth.setCredentials({
      access_token: user.accessToken
    });
  }
}
