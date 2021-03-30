import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductResolver } from './product-details/product.resolver';
import { DeactivateProductGuard } from './deactivate-product.guard';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':productId',
    component: ProductDetailsComponent,
    resolve: {
      product: ProductResolver
    },
    canDeactivate: [DeactivateProductGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProductResolver,
    DeactivateProductGuard
  ]
})
export class ProductsRoutingModule {
}
