import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../content/backoffice/content/products/store/reducers/products.reducers';

export const addProductToCart = createAction('[Cart] add product', props<{ product: IProduct }>());
export const removeProductFromCart = createAction('[Cart] remove product', props<{ id: string }>());
export const updateProductCountInCart = createAction('[Cart] Decrement', props<{ id: string, count: number }>());
