import { Component, Input } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';
import { ModalService } from '../modal/modal.service';

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
    private productsService: ProductsService,
  ) {
    console.log(this.productsService.timestamp);
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
