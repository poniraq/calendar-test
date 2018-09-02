import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrOverlayModule } from '@app/shared/qr-overlay/qr-overlay.module';
import { TimepanelModule } from './timepanel';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Angular Material
    MatGridListModule,
    MatButtonModule,
    MatIconModule,

    TimepanelModule,
    QrOverlayModule
  ],
  declarations: []
})
export class SharedModule { }
