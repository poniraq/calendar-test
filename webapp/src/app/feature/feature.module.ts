import { NgModule } from '@angular/core';
import { CalendarModule } from './calendar/calendar.module';
import { ListModule } from './list/list.module';

@NgModule({
  exports: [
    CalendarModule,
    ListModule
  ]
})
export class FeatureModule { }
