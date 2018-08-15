import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent } from '@app/feature/common';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
  @Input() events: CalendarEvent[];
  @Input() showButton = true;
  @Output() create: EventEmitter<any> = new EventEmitter();

  onAddClick() {
    this.create.emit(null);
  }
}
