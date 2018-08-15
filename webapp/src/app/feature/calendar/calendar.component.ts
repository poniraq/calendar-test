import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClockService } from '@app/core/clock.service';
import { CalendarEntry, CalendarEvent, CalendarEvents, CalendarService } from '@app/feature/common';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  id: string;
  entry: Observable<CalendarEntry>;
  currentEvent: CalendarEvent;
  now: Observable<Date>;

  events: Observable<CalendarEvents>;

  constructor(
    private route: ActivatedRoute,
    private service: CalendarService,
    private clock: ClockService
  ) {
    this.now = this.clock.now;
  }

  ngOnInit() {
    const id = this.id = this.route.snapshot.paramMap.get('id');

    this.getEntry(id);
    this.getEvents(id);
  }

  getEntry(id: string) {
    this.entry = this.service.calendar({ id });
  }

  getEvents(id: string) {
    this.events = this.service.events({ id }).pipe(
      map((events) => {
        const current = this.currentEvent = this.findCurrentEvent(events.items);

        if (current) {
          events.items = events.items.filter(item => item.id !== current.id);
        }
        return events;
      })
    );
  }

  findCurrentEvent(events: CalendarEvent[]) {
    const now = moment(new Date());

    return events.find((event) => {
      return now.isBetween(event.start.date, event.end.date);
    });
  }

  onEventExpiration() {
    this.currentEvent = null;
  }
}
