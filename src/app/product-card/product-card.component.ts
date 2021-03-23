import { Component, Host, Input } from '@angular/core';
import { IProduct, ProductsService } from '../products.service';

@Component({
  selector: 'course-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  // providers: [
  //   {
  //     provide: ProductsService,
  //     useClass: ProductsService
  //   }
  // ]
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

  constructor(
    @Host() private productsService: ProductsService
  ) {
    console.log(this.productsService.timestamp);
  }

  public toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
  }
}
