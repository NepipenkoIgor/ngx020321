import { NgModule } from '@angular/core';
import { StatisticComponent } from './statistic.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StatisticRoutingModule } from './statistic-routing.module';


@NgModule({
  declarations: [StatisticComponent],
  imports: [
    SharedModule,
    StatisticRoutingModule
  ]
})
export class StatisticModule {
}
