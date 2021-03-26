import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { ProductsService } from './products.service';
import { ModalModule } from './modal/modal.module';
// NgModule --> es6
// declarations ----> let/const
// imports ----> import
// exports ----> export


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SearchComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRatesDirective,
    ExchangeRatesComponent,
    HiddenDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
