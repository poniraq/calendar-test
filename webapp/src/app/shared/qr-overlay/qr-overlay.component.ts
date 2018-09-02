import { trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, HostBinding } from '@angular/core';
import { fadeIn, fadeOut } from '@app/shared/animations';

@Component({
  selector: 'app-qr-overlay',
  templateUrl: './qr-overlay.component.html',
  styleUrls: ['./qr-overlay.component.scss'],
  animations: [
    trigger('fadeInOut', [ fadeIn(), fadeOut() ])
  ]
})
export class QrOverlayComponent implements OnInit {
  @HostBinding('@fadeInOut') fadeInOut;

  @Input() link: string;
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }

}
