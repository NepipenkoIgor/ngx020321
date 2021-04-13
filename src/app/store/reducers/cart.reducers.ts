import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { addProductToCart, removeProductFromCart, updateProductCountInCart } from '../actions/cart.actions';
import { IProduct } from '../../content/backoffice/content/products/store/reducers/products.reducers';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ICartProduct extends IProduct {
  count: number;
}

export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>({
  selectId: (product: ICartProduct) => product._id,
});


export const initialState = adapter.getInitialState();

// tslint:disable-next-line:variable-name
const _cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state: EntityState<ICartProduct>, {product}) => {
    const entity = state.entities[product._id] as ICartProduct;
    let count = 1;
    if (entity) {
      count = entity.count + 1;
    }
    return adapter.upsertOne({...product, count}, state);
  }),
  on(removeProductFromCart, (state: EntityState<ICartProduct>, {id}) => {
    return adapter.removeOne(id, state);
  }),
  on(updateProductCountInCart, (state: EntityState<ICartProduct>, {id, count}) => {
    return adapter.updateOne({id, changes: {count}}, state);
  }),
);

export function cartReducer(state: EntityState<ICartProduct>, action: any): any {
  return _cartReducer(state, action);
}

export const {selectAll} = adapter.getSelectors();
export const selectCartState = createFeatureSelector<EntityState<ICartProduct>>('cart');

export const selectCartProducts = createSelector(
  selectCartState,
  selectAll
);
