import { trigger } from '@angular/animations';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ClockService } from '@app/core/clock.service';
import { CalendarEntry, CalendarEvent } from '@app/feature/common/calendar';
import { fadeIn, fadeOut } from '@app/shared/animations';
import * as moment from 'moment';
import { Observable } from 'rxjs';


enum MODE { DISPLAY, EXTEND }

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],

  animations: [
    trigger('fadeIn', [ fadeIn() ]),
    trigger('fadeOut', [ fadeOut() ]),
  ]
})
export class EventDetailsComponent implements OnInit {
  @HostBinding('@fadeIn') animation;

  @Input() entry: Observable<CalendarEntry>;
  @Input() event: CalendarEvent;
  @Output() expired: EventEmitter<CalendarEvent> = new EventEmitter();
  @Output() update: EventEmitter<CalendarEvent> = new EventEmitter();

  MODE = MODE;
  mode: MODE = MODE.DISPLAY;

  timeLeft: string;
  _end: Date;

  extendDurations = [
    5, 10, 15,
    30, 45, 60
  ];

  constructor(
    private clock: ClockService
  ) {}

  ngOnInit() {
    this.clock.now.subscribe((now) => this.onTimeUpdate(now));
  }

  onTimeUpdate(datetime) {
    if (!this.event) { return; }

    if (this.event.expired) {
      this.expired.emit(this.event);
      this.timeLeft = null;
    } else {
      const now = moment(datetime);
      const end = moment(this.event.end);
      const duration = moment.duration(end.diff(now));

      this.timeLeft = duration.humanize();
    }
  }

  onExtendClick() {
    this.mode = MODE.EXTEND;
    this._end = new Date(+this.event.end);
  }
  onEndClick() {
    this.event.end = new Date();
    this.update.emit(this.event);

    this.event = null;
    this.timeLeft = null;
  }

  onDoneClick() {
    this.mode = MODE.DISPLAY;
    this.update.emit(this.event);
  }
  onCancelClick() {
    this.mode = MODE.DISPLAY;
    this.event.end = this._end;
  }

  extendBy(minutes) {
    if (!this.event) { return; }

    const date = new Date(+this.event.end);

    date.setMinutes(date.getMinutes() + minutes);
    this.event.end = date;
  }
}
