import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@app/feature/common/common.module';
import { QRCodeModule } from 'angularx-qrcode';
import { CalendarComponent } from './calendar.component';
import { CalendarRouter } from './calendar.router';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { SharedModule } from '@app/shared';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,

    FlexLayoutModule,
    QRCodeModule,

    CalendarRouter
  ],
  declarations: [ CalendarComponent, EventListComponent, EventDetailsComponent, EventCreateComponent ]
})
export class CalendarModule { }
