import { counterReducers, ICounter } from './reducers/counter.reducers';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { EntityState } from '@ngrx/entity';
import { cartReducer, ICartProduct } from './reducers/cart.reducers';
import { IUser, userReducer } from './reducers/user.reducers';
import { ActionReducer } from '@ngrx/store';
import { logout } from './actions/auth.actions';


export interface IRootState {
  counters: ICounter;
  router: RouterReducerState<any>;
  cart: EntityState<ICartProduct>;
  user: IUser
}

export const reducers = {
  counters: counterReducers,
  router: routerReducer,
  cart: cartReducer,
  user: userReducer,
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
      root: {queryParams},
    } = routerState;
    const {params} = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return {url, params, queryParams};
  }
}


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
};


export function logoutAndClearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === logout().type) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
