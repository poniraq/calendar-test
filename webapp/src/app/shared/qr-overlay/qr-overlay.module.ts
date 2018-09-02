import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QRCodeModule } from 'angularx-qrcode';
import { QrOverlayComponent } from './qr-overlay.component';

@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,
    QRCodeModule,
  ],
  exports: [ QrOverlayComponent ],
  declarations: [ QrOverlayComponent ]
})
export class QrOverlayModule { }
