import { trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarEntry, CalendarEvent, CalendarService } from '@app/feature/common/calendar';
import { fadeIn } from '@app/shared/animations';
import { clone } from 'lodash';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('fadeIn', [ fadeIn ])
  ]
})
export class CalendarComponent implements OnInit {
  @HostBinding('@fadeIn') fadeIn;

  id: string;
  entry: Observable<CalendarEntry>;
  currentEvent: CalendarEvent;
  createLink: string;

  events: Observable<CalendarEvent[]>;

  constructor(
    private route: ActivatedRoute,
    private service: CalendarService
  ) { }

  ngOnInit() {
    const id = this.id = this.route.snapshot.paramMap.get('id');

    this.getEntry(id);
    this.getEvents(id);
  }

  getEntry(id: string) {
    this.entry = this.service.calendar(id);
  }

  getEvents(id: string) {
    this.events = this.service.events(id).pipe(
      map((events) => {
        const index = events.items.findIndex((event) => event.current);
        const current = index !== -1 && events.items[index] || null;
        const items = clone(events.items);

        this.currentEvent = current;

        if (current) {
          items.splice(index, 1);
        }

        return items
          .sort((a, b) => moment(a.start).isBefore(b.start) ? -1 : 1)
          .filter((event) => !event.expired);
      })
    );
  }

  onEventExpiration() {
    this.currentEvent = null;
  }

  onEventUpdate(event) {
    this.service
      .updateEvent(this.id, event)
      .subscribe(updatedEvent => this.currentEvent = updatedEvent.expired ? null : updatedEvent);
  }

  onCreate() {
    this.createLink = this.service.getLink(this.id);
  }
  closeQROverlay() {
    this.createLink = null;
  }
}
