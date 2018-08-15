import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core';
import { ResourceCollection, watch, WatchableConfig, WatchConfig } from '@app/util/google';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CalendarEntry, CalendarEvents } from './calendar.types';


@Injectable({
  providedIn: CoreModule
})
export class CalendarService {
  constructor(
    private http: HttpClient
  ) { }

  public list(config: WatchConfig = {}) {
    return watch(this.pullList, this, config.interval);
  }
  protected pullList({ syncToken }: WatchableConfig = {}): Observable<ResourceCollection<CalendarEntry>> {
    const params = syncToken ? { syncToken } : {};

    return this.http
      .get('/calendar/list', { params })
      .pipe(
        map((list) => list as ResourceCollection<CalendarEntry>),
        catchError(() => of({ items: [] }))
      );
  }

  public calendar({ id }: { id: string }): Observable<CalendarEntry> {
    return this.http
      .get(`/calendar/${id}`)
      .pipe(
        catchError(() => of(null))
      );
  }

  public events(config: WatchConfig) {
    const { interval, ...args } = config;

    return watch(this.pullEvents, this, interval, args);
  }
  protected pullEvents({ id }: { id: string }, { syncToken }: WatchableConfig = {}): Observable<CalendarEvents> {
    const params = syncToken ? { syncToken } : {};

    return this.http
      .get(`/calendar/${id}/events`, { params })
      .pipe(
        catchError(() => of({ items: [] })),
        map((events: CalendarEvents) => {
          events.items = events.items.map(event => {
            event.start.date = new Date(event.start.dateTime);
            event.end.date = new Date(event.end.dateTime);

            const now = moment(new Date());
            const end = moment(event.end.date);

            if (now.isSameOrAfter(end)) {
              event.deleted = true;
            }

            return event;
          });

          return events;
        })
      );
  }
}
