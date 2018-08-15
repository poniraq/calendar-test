import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  now: Observable<Date>;

  constructor() {
    this.now = timer(0, 1000).pipe(
      map(() => new Date()),
      share()
    );
  }
}
