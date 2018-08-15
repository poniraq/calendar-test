import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ClockService } from '@app/core/clock.service';
import * as moment from 'moment';
import { CalendarEntry, CalendarEvent } from '@app/feature/common';


enum MODE { DISPLAY, EXTEND }

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input() calendar: CalendarEntry;
  @Input() event: CalendarEvent;
  @Output() expired: EventEmitter<CalendarEvent> = new EventEmitter();

  MODE = MODE;
  mode: MODE = MODE.DISPLAY;

  timeLeft: string;

  constructor(
    private clock: ClockService
  ) {}

  ngOnInit() {
    this.clock.now.subscribe((now) => this.onTimeUpdate(now));
  }

  onTimeUpdate(datetime) {
    if (!this.event) { return; }

    const now = moment(datetime);
    const end = moment(this.event.end.date);
    const expired = now.isSameOrAfter(end);
    const duration = moment.duration(end.diff(now));

    if (expired) {
      this.expired.emit(this.event);
      this.timeLeft = null;
    } else {
      this.timeLeft = duration.humanize();
    }
  }

  onExtendClick() {
    this.mode = MODE.EXTEND;
  }
  onCancelClick() {
    this.mode = MODE.DISPLAY;
  }

  extend(time) {
    if (!this.event) { return; }

    const event = this.event;
    const date = event.end.date;
    const minutes = date.getMinutes();

    date.setMinutes(minutes + time);
    event.end = { date };

    this.event = event;
  }
}
