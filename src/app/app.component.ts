import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { UnSubscriber } from './utils/unsubscriber';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy {
  public title = {text: 'ngx020321'};
  public drawer!: MatDrawer;
  public searchTerm = 'Product 1';
  // public products$: Observable<IProduct[]> = products$.pipe(delay(4000));
  public products1$: Observable<IProduct[]> = products$.pipe(filter<IProduct[]>(Boolean));

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor(
    // private applicationRef: ApplicationRef,
  ) {
    super();
  }

  public ngOnInit(): void {


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
}

