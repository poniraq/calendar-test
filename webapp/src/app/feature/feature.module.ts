import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CalendarModule } from './calendar/calendar.module';
import { ListModule } from './list/list.module';

@NgModule({
  imports: [],

  exports: [
    CalendarModule,
    ListModule,
  ]
})
export class FeatureModule { }
