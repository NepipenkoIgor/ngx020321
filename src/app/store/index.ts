import { counterReducers, ICounter } from './reducers/counter.reducers';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';


export interface IRootState {
  counters: ICounter;
  router: RouterReducerState<any>;
}

export const reducers = {
  counters: counterReducers,
  router: routerReducer
};
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
