import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { OneProductInCartComponent } from './one-product-in-cart/one-product-in-cart.component';


@NgModule({
  declarations: [CartComponent, OneProductInCartComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule {
}
