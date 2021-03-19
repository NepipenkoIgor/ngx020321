import { Component } from '@angular/core';
import { IRate } from './exchange-rates.directive';

@Component({
  selector: 'course-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent {
  public rates: IRate [] = [
    {value: 10, currency: 'EUR'},
    {value: 200, currency: 'RUB'},
    {value: 11, currency: 'USD'},
  ];

  public mode: 'off' | 'on' = 'off';
}
