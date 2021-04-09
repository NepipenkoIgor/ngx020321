import { createReducer, on } from '@ngrx/store';
import { getProductsPending, getProductsError, getProductsSuccess } from '../actions/products.actions';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

export interface IProductState {
  items: IProduct[];
  isLoading: boolean;
}

export const initialState: IProductState = {
  items: [],
  isLoading: false,
};
// tslint:disable-next-line:variable-name
const _productsReducer = createReducer(
  initialState,
  on(getProductsPending, (state) => {
    return {...state, isLoading: true};
  }),
  on(getProductsSuccess, (state, {products}) => {
    return {...state, items: [...state.items, ...products], isLoading: false};
  }),
  on(getProductsError, (state) => {
    return {...state, isLoading: false};
  })
);

export function productsReducer(state: IProductState, action: any): any {
  return _productsReducer(state, action);
}
