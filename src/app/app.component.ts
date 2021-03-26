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
    const seq = new Subject();
    seq.subscribe((v: any) => {
      console.log(`V ====> ${v}`);
    });

    setTimeout(() => {
      console.log('SEND');
      seq.next('Rxjs is awesome');
    }, 5000);
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

