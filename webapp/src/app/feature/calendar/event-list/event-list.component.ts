import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent } from '@app/feature/common/calendar';
import { foldIn, foldOut } from '@app/shared/animations';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],

  animations: [
    trigger('foldInOut', [ foldIn(), foldOut() ])
  ]
})
export class EventListComponent {
  @Input() events: Observable<CalendarEvent[]>;
  @Input() showButton = true;

  @Output() create = new EventEmitter<any>();

  onAddClick() {
    this.create.emit(null);
  }
}
