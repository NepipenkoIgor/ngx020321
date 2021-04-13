import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

export interface IRate {
  value: number;
  currency: string;
}

@Directive({
  selector: '[courseExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('courseExchangeRatesFrom')
  public rates!: IRate[];


  @Input('courseExchangeRatesAutoplay')
  public mode!: 'off' | 'on';

  @Input('courseExchangeRatesPeriod')
  public ms!: number;

  private context: any;
  private index = 0;
  private intervalId!: number;

  constructor(
    private tmpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };
    this.vcr.createEmbeddedView(this.tmpl, this.context);
    // this.rates.forEach((item) => {
    //   this.vcr.createEmbeddedView(this.tmpl, {$implicit: item});
    // });

    this.resetInterval();
  }


  private next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }


  private initInterval(): this {
    this.intervalId = window.setInterval(() => {
      this.next();
    }, this.ms);
    return this;
  }

  private resetInterval(): void {
    if (this.mode === 'off') {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private clearInterval(): this {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    return this;
  }
}

