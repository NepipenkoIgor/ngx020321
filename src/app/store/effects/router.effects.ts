import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { navigationGo } from '../actions/router.actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  navigationGo$ = createEffect(() => this.actions$.pipe(
    ofType(navigationGo),
    tap(({payload: {path, query: queryParams, extras}}) => {
      this.router.navigate(path, {queryParams, ...extras});
    })
    ),
    {dispatch: false}
  );

  navigationBack$ = createEffect(() => this.actions$.pipe(
    ofType(navigationGo),
    tap(() => {
      this.location.back();
    })
    ),
    {dispatch: false}
  );
  navigationForward$ = createEffect(() => this.actions$.pipe(
    ofType(navigationGo),
    tap(() => {
      this.location.forward();
    })
    ),
    {dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
  ) {
  }
}
