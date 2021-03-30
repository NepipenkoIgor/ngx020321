import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../products.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<IProduct | null> {

  constructor(
    private  http: HttpClient,
    private  router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null> {
    const productId = route.paramMap.get('productId');
    return this.http.get<IProduct | null>(`/products/${productId}`)
      .pipe(
        map((product: IProduct | null) => {
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }), catchError(() => {
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }
}
