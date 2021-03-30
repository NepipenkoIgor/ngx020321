import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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
  public products1$: Observable<IProduct[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
