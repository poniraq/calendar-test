import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CoreModule } from '@app/core';
import { UserService } from '@app/core/user';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService
  ) { }
  canActivate(): Observable<boolean> {
    const service = this.userService;

    return service.user.pipe(
      map((user) => !!user),
      tap((can) => !can && window.location.assign('/auth/login'))
    );
  }
}
