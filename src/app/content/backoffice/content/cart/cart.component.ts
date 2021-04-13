import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { UnSubscriber } from '../../../../utils/unsubscriber';
import { ICartProduct } from '../../../../store/reducers/cart.reducers';
import { removeProductFromCart, updateProductCountInCart } from '../../../../store/actions/cart.actions';
import { cartProductsWithBonuses } from '../../../../store/selectors/cart.selectors';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends UnSubscriber implements OnInit {

  public products$ = this.store.select(cartProductsWithBonuses);

  constructor(
    private store: Store<IRootState>
  ) {
    super();
  }

  ngOnInit(): void {
    // this.store.select(selectCartProducts)
    //   .pipe(takeUntil(this.subscribeControl))
    //   .subscribe((products) => {
    //     console.log(products);
    //   });
  }

  public increment({_id: id, count}: ICartProduct): void {
    this.store.dispatch(updateProductCountInCart({id, count: count + 1}));
  }

  public decrement(product: ICartProduct): void {
    const {count, _id: id} = product;
    if (count === 1) {
      this.remove(product);
      return;
    }
    this.store.dispatch(updateProductCountInCart({id, count: count - 1}));
  }

  public remove({_id: id}: ICartProduct): void {
    this.store.dispatch(removeProductFromCart({id}));
  }

  // tslint:disable-next-line:variable-name
  public trackByFn(_index: number, item: ICartProduct): string {
    return item._id;
  }

}
