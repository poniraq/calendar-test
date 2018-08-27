import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEntry, CalendarService, ICalendar, IResourceList } from '@app/feature/common/calendar';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  private _calendars: Observable<IResourceList<CalendarEntry>>;

  constructor(
    public service: CalendarService,
    private router: Router
  ) {
  }

  select(item: ICalendar) {
    this.router.navigate(['calendar', item.id]);
  }

  get calendars() {
    if (!this._calendars) {
      this._calendars = this.service.list();
    }

    return this._calendars;
  }
}
