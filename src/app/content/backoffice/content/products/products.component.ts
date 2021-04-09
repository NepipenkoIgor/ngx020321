import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../../store';
import { IProduct, IProductState } from './store/reducers/products.reducers';
import { getProductsPending } from './store/actions/products.actions';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public searchTerm = 'Product 1';
  public title$ = this.activatedRoute.data.pipe(pluck('title'));
  public onlyFavorites = false;
  // public products$: Observable<IProduct[]> = products$.pipe(delay(4000));
  public products1$: Observable<IProduct[]> = this.store.select('products', 'items');
  public isLoading$: Observable<boolean> = this.store.select('products', 'isLoading');

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<IRootState & { products: IProductState }>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(getProductsPending());
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
