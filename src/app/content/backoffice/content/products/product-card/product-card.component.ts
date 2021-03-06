import { Component, Input } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { IProduct } from '../store/reducers/products.reducers';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../../store';
import { addProductToCart } from '../../../../../store/actions/cart.actions';

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    private modalService: ModalService,
    private store: Store<IRootState>,
  ) {
  }

  public toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
  }

  public async addToCart(): Promise<void> {
    const m = await import('./confirm-product/confirm-product.component');
    this.modalService.open({
      component: m.ConfirmProductComponent,
      context: {
        product: this.product,
        save: () => {
          console.log('To cart');
          this.store.dispatch(addProductToCart({product: {...this.product}}));
          this.modalService.close();
        },
        close: () => {
          console.log('cancel');
          this.modalService.close();
        },
      }
    });
  }
}
