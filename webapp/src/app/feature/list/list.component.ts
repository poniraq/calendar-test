import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEntry, CalendarService } from '@app/feature/common';
import { ResourceCollection } from '@app/util/google';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  calendars: Observable<ResourceCollection<CalendarEntry>>;

  constructor(
    public service: CalendarService,
    private router: Router
  ) {
    this.calendars = service.list();
  }

  select(item: CalendarEntry) {
    this.router.navigate(['calendar', item.id]);
  }
}
