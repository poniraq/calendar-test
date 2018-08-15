import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/shared/material.module';
import { CalendarComponent } from './calendar.component';
import { CalendarRouter } from './calendar.router';
import { EventDetailsComponent } from './common/event-details/event-details.component';
import { EventListComponent } from './common/event-list/event-list.component';


@NgModule({
  imports: [
    CommonModule,

    MaterialModule,
    CalendarRouter
  ],
  declarations: [ CalendarComponent, EventListComponent, EventDetailsComponent ]
})
export class CalendarModule { }
