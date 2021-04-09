import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export interface INavigationPayload {
  path: any;
  query?: any;
  extras?: NavigationExtras;
}

export const navigationGo = createAction('[Router] GO', props<{ payload: INavigationPayload }>());
export const navigationBack = createAction('[Router] BACK');
export const navigationForward = createAction('[Router] FORWARD');
