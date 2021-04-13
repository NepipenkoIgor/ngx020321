import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

export const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'statistic',
        loadChildren: () => import('./content/statistic/statistic.module').then(mod => mod.StatisticModule),
        data: {
          title: 'My Statistic'
        }
      },
      {
        path: 'cart',
        loadChildren: () => import('./content/cart/cart.module').then(mod => mod.CartModule),
        data: {
          title: 'My Cart'
        }
      },
      {
        path: '',
        loadChildren: () => import('./content/products/products.module').then(mod => mod.ProductsModule),
        data: {
          title: 'Products List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeRoutingModule {
}
