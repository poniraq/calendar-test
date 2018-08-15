import { NgModule } from '@angular/core';
import { MatGridListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
