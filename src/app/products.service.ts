import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

@Injectable()
export class ProductsService {

  public timestamp = Date.now();

  constructor(
    private http: HttpClient,
  ) {
  }

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/products');
  }

}
