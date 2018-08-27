import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, HostBinding } from '@angular/core';
import { fadeIn, fadeOut } from '@app/shared/animations';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss'],
  animations: [
    trigger('fadeInOut', [ fadeIn(), fadeOut() ])
  ]
})
export class EventCreateComponent implements OnInit {
  @HostBinding('@fadeInOut') fadeInOut;

  @Input() link: string;
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.close.emit();
  }

}
