import { ResourceCollection, Resource } from '@app/util/google';

export interface CalendarList extends ResourceCollection<CalendarEntry> {
  kind: 'calendar#calendarList';
  etag: string;
  items: CalendarEntry[];
}

export interface CalendarEntry extends Resource {
  kind: 'calendar#calendarListEntry';
  etag: string;
  id: string;
  accessRole: string;
  selected: boolean;
  summary: string;
  timeZone: 'UTC' | string;
  foregroundColoe: string;
  backgroundColor: string;
  colorId: string;
  deleted?: boolean;
}


export interface CalendarEvents extends ResourceCollection<CalendarEvent> {
  kind: 'calendar#events';
  etag: string;
  accessRole: string;
  summary: string;
  timeZone: string;
  items: CalendarEvent[];
}

export interface CalendarEvent extends Resource {
  kind: 'calendar#event';
  id: string;
  etag: string;
  htmlLink: string;
  status: string;
  summary: string;
  start: {
    date?: Date;
    dateTime?: string;
  };
  end: {
    date?: Date;
    dateTime?: string;
  };
}
