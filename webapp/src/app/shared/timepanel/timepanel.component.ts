import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timepanel',
  templateUrl: './timepanel.component.html',
  styleUrls: ['./timepanel.component.scss']
})
export class TimepanelComponent {
  @Input()
  public date: Observable<Date>;

  @Input()
  public displayDate = true;

  @Input()
  public dateFormat = 'LLLL d';

  @Input()
  public displayTime = true;

  @Input()
  public timeFormat = 'HH:mm:ss';
}
