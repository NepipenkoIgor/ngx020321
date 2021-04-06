import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    // tslint:disable-next-line:variable-name
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const url = state.url;
    return of(false)
      .pipe(switchMap((isLogined: boolean) => {
        this.router.parseUrl('/');
        if (!isLogined && (url === '/login' || url === '/signup')) {
          return of(true);
        }
        if (isLogined && (url === '/login' || url === '/signup')) {
          // this.router.navigate(['/backoffice']);
          return of(this.router.parseUrl('/backoffice'));
        }
        if (!isLogined) {
          return of(this.router.parseUrl('/login'));
        }
        return of(isLogined);
      }));
  }

}
