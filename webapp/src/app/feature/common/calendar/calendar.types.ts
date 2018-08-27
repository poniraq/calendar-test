export interface IResourceList<T> {
  items: T[];
  nextSyncToken?: string;
}

export interface IResource {
  id: string;
  deleted?: boolean;
  kind: string;
  summary: string;
  accessRole: string;
}

export interface ICalendarList extends IResourceList<ICalendar> {
  kind: 'calendar#calendarList';
}

export interface ICalendar extends IResource {
  kind: 'calendar#calendarListEntry';
  selected: boolean;
  timeZone: 'UTC' | string;
}


export interface ICalendarEvents extends IResourceList<ICalendarEvent> {
  kind: 'calendar#events';
  timeZone: string;
}

export interface ICalendarEvent extends IResource {
  kind: 'calendar#event';
  htmlLink: string;
  status: string;
  start: {
    date?: Date;
    dateTime?: string;
  };
  end: {
    date?: Date;
    dateTime?: string;
  };
}
