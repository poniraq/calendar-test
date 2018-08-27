import { NgModule } from '@angular/core';
import { CommonModule } from '@app/feature/common/common.module';
import { SharedModule } from '@app/shared';
import { ListComponent } from './list.component';
import { ListRouter } from './list.router';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ListRouter
  ],
  declarations: [ListComponent]
})
export class ListModule { }
