import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getProductsError, getProductsPending, getProductsSuccess } from '../actions/products.actions';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { IProduct } from '../reducers/products.reducers';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsEffects {

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IProduct[]>('/products')
      .pipe(
        mergeMap((products: IProduct[]) => {
          return [getProductsSuccess({products})];
        }),
        catchError(() => {
          return of(getProductsError());
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
  }
}
