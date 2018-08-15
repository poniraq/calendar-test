import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private config: ConfigService,
    private titleService: Title
  ) {
    titleService.setTitle(config.title);
  }
}
