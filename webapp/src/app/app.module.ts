import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@app/core';
import { FeatureModule } from '@app/feature';
import { AppComponent } from './app.component';
import { AppRouter } from './app.router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    FeatureModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
