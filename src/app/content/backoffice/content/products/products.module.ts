import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../../../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [ProductsComponent, SearchComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ProductDetailsComponent,],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule {
}
