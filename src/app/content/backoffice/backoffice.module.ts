import { NgModule } from '@angular/core';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ExchangeRatesDirective,
    ExchangeRatesComponent,
    HiddenDirective,
    BackofficeComponent
  ],
  imports: [
    SharedModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule {
}
