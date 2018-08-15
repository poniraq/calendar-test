import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { User, UserData } from './user';
import * as cookies from 'js-cookie';

@Injectable({
  providedIn: CoreModule
})
export class UserService {
  private _user: User;
  private cookieName = 'session-cookie';

  constructor(
    private http: HttpClient
  ) { }

  setUserData(data: UserData) { this._user = new User(data); }
  get user() {
    if (this._user) {
      return of(this._user);
    }

    return this.attemptSessionRestore();
  }

  attemptSessionRestore() {
    const obs = this.http.get('/auth/loggedin', { withCredentials: true });

    return obs.pipe(
      tap((res: UserData) => this.setUserData(res)),
      map(() => this._user),
      catchError(() => of(null))
    );
  }

  logout() {
    return this.http.post('/logout', { withCredentials: true })
      .pipe(
        catchError(() => of(false)),
        tap(() => {
          cookies.remove(this.cookieName);
          this._user = null;
        })
      );
  }
}
