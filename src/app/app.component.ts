import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { UnSubscriber } from './utils/unsubscriber';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IProduct, ProductsService } from './products.service';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy {
  public title = {text: 'ngx020321'};
  public drawer!: MatDrawer;
  public searchTerm = 'Product 1';
  public onlyFavorites = false;
  // public products$: Observable<IProduct[]> = products$.pipe(delay(4000));
  public products1$: Observable<IProduct[]> = this.productsService.getProducts();

  public requestControl$$ = new Subject();

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor(
    // private applicationRef: ApplicationRef,
    private productsService: ProductsService
  ) {
    super();
    console.log(this.productsService.timestamp);
  }

  public ngOnInit(): void {
    // this.requestControl$$
    //   .pipe(
    //     debounceTime(500),
    //     switchMap(() => {
    //       return of('some value')
    //         .pipe(delay(1000));
    //     })
    //   ).subscribe((v) => {
    //   console.log(v);
    // });

    // const sub1: Subscription = interval(2000)
    //   .pipe(takeUntil(this.subscribeControl))
    //   .subscribe((v: number) => {
    //     console.log(v);
    //   }, () => {
    //   }, () => {
    //     console.log('COMPLETED 1');
    //   });
    //
    //
    // setTimeout(() => {
    //   sub1.unsubscribe();
    // }, 10000);


    // products$.subscribe((products: IProduct[]) => {
    //   this.products = products;
    // }, () => {
    // }, () => {
    //   console.log('COMPLETED 2');
    // });
  }

  public ngOnDestroy(): void {
    // do something
    super.ngOnDestroy();
  }


  public setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

  public sendRequest(): void {
    this.requestControl$$.next();
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}

