import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,

    // Angular Material
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedModule { }
