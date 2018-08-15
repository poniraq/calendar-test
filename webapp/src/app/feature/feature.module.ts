import { NgModule } from '@angular/core';
import { ListModule } from './list/list.module';
import { CalendarModule } from './calendar/calendar.module';

@NgModule({
  imports: [],

  exports: [
    CalendarModule,
    ListModule,
  ]
})
export class FeatureModule { }
