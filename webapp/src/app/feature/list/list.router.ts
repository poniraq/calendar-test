import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { AuthGuard } from '@app/core/guards';

const paths: Routes = [
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [
    RouterModule.forChild(paths)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ListRouter { }
