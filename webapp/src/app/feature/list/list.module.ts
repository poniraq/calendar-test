import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRouter } from './list.router';
import { MaterialModule } from '@app/shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    ListRouter
  ],
  declarations: [ListComponent]
})
export class ListModule { }
