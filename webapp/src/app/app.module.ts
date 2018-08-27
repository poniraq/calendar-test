import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core';
import { FeatureModule } from '@app/feature';
import { SharedModule } from '@app/shared';
import { AppComponent } from './app.component';
import { AppRouter } from './app.router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,

    CoreModule,
    SharedModule,
    FeatureModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
