import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigService {
  public title = 'Calendar';
}
