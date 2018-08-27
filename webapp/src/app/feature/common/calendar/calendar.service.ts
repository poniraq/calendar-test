import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CalendarModule } from './calendar.module';
import { CalendarEntry, CalendarEvent } from './calendar.resources';
import { ICalendar, ICalendarEvent, ICalendarEvents, IResourceList } from './calendar.types';
import { Watch } from './calendar.watch';


@Injectable({
  providedIn: CalendarModule
})
export class CalendarService {
  constructor(
    private http: HttpClient
  ) { }

  public calendar(id: string): Observable<CalendarEntry> {
    return this.http
      .get(`/calendar/${id}`)
      .pipe(
        map((entry: ICalendar) => new CalendarEntry(entry)),
        catchError(() => of(null))
      );
  }

  @Watch()
  public list(syncToken?: string): Observable<IResourceList<CalendarEntry>> {
    const params = syncToken ? { syncToken } : {};

    return this.http
      .get('/calendar/list', { params })
      .pipe(
        map((list: IResourceList<ICalendar>) => {
          return {
            items: list.items.map((entry) => new CalendarEntry(entry)),
            nextSyncToken: list.nextSyncToken
          };
        }),
        catchError(() => of(null))
      );
  }

  @Watch()
  public events(id: string, syncToken?: string): Observable<IResourceList<CalendarEvent>> {
    const params = syncToken ? { syncToken } : {};

    return this.http
      .get(`/calendar/${id}/events`, { params })
      .pipe(
        map((events: ICalendarEvents) => {
          const items = events.items
            .map(event => new CalendarEvent(event));

          return {
            items: items,
            nextSyncToken: events.nextSyncToken
          };
        }),
        catchError(() => of(null))
      );
  }

  public updateEvent(id: string, event: CalendarEvent): Observable<CalendarEvent> {
    return this.http
      .patch(`/calendar/${id}/events/${event.id}`, { patch: event.patch() })
      .pipe(
        map((entry: ICalendarEvent) => new CalendarEvent(entry)),
        catchError(() => of(null))
      );
  }

  public getLink(id: string) {
    return `https://www.google.com/calendar/r/eventedit?sf=true&output=xml&src=${id}`;
    // return `https://calendar.google.com/calendar/gp#~calendar:view=e&bm=1&src=${id}`;
  }
}
