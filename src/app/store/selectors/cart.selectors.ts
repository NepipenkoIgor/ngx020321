import { createSelector } from '@ngrx/store';
import { ICartProduct, selectCartProducts } from '../reducers/cart.reducers';
import { IUser, selectUserState } from '../reducers/user.reducers';


export const totalProductsCount = createSelector(
  selectCartProducts,
  (products: ICartProduct[]) => {
    return products.reduce((count, product) => {
      const newCount = product.count + count;
      return newCount;
    }, 0);
  }
);


export const cartProductsWithBonuses = createSelector(
  selectCartProducts,
  selectUserState,
  (products: ICartProduct[], user: IUser
  ) => {
    return products.map((product) => {
      return {...product, price: product.count * product.price * user.bonuses};
    }, 0);
  }
);
