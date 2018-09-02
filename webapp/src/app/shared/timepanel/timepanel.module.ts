import { NgModule } from '@angular/core';
import { TimepanelComponent } from './timepanel.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ TimepanelComponent ],
  declarations: [ TimepanelComponent ]
})
export class TimepanelModule { }
