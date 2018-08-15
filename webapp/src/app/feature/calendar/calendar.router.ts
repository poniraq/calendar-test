import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guards';
import { CalendarComponent } from './calendar.component';


const paths: Routes = [
  { path: 'calendar/:id', component: CalendarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(paths)
  ],
  exports: [ RouterModule ]
})
export class CalendarRouter { }
