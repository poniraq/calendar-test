import { ICalendarEvent, ICalendar, IResource } from './calendar.types';
import { merge } from 'lodash';
import * as moment from 'moment';

abstract class Resource<T extends IResource> {
  constructor(
    public raw: T
  ) {}

  get id() { return this.raw.id; }
  get kind() { return this.raw.kind; }
  get summary() { return this.raw.summary; }
  get deleted() { return this.raw.deleted; }

  patch() {
    return { summary: this.raw.summary };
  }
}

export class CalendarEvent extends Resource<ICalendarEvent> {
  get end() { return new Date(this.raw.end.dateTime); }
  set end(v: Date) { this.raw.end.dateTime = moment(v).format(); }

  get start() { return new Date(this.raw.start.dateTime); }
  set start(v: Date) { this.raw.start.dateTime = moment(v).format(); }

  get expired() { return moment(this.end).isSameOrBefore(new Date()); }
  get current() { return moment(new Date()).isBetween(this.start, this.end); }

  patch() {
    return merge({
      start: this.raw.start,
      end: this.raw.end
    }, super.patch());
  }
}

export class CalendarEntry extends Resource<ICalendar> {}
