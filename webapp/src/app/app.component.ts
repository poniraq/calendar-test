import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService, ClockService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private config: ConfigService,
    private titleService: Title,
    public clock: ClockService
  ) {
    titleService.setTitle(config.title);
  }
}
