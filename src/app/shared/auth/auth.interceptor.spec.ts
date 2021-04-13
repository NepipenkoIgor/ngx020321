import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { BASE_URL_TOKEN } from '../../config';
import { environment } from '../../../environments/environment';
import { IProduct } from '../../content/backoffice/content/products/store/reducers/products.reducers';
//
const mockedProducts: IProduct[] = [
  {
    '_id': '6075cb51dc844adecfeffed8',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': false
  },
  {
    '_id': '6075cb51dc844adecfeffed9',
    'title': 'Product 1',
    'img': 'assets/img/product-1.jpg',
    'price': 200,
    'author': 'Igor',
    'isFavorite': true
  },
  {
    '_id': '6075cb51dc844adecfeffeda',
    'title': 'Product 41',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'author': 'Lena',
    'isFavorite': false
  },
];


describe('Auth interceptor', () => {

  let httpMocked: HttpTestingController;
  const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {provide: BASE_URL_TOKEN, useValue: environment.baseUrl, multi: true},

      ]
    });
    httpMocked = TestBed.inject(HttpTestingController);
  });

  it('Should have accessToken', inject([HttpClient, BASE_URL_TOKEN], (
    http: HttpClient,
    baseUrl: string
  ) => {
    http.get('/products')
      .subscribe();

    const httpObj = httpMocked.expectOne({
      url: `${baseUrl}/products`,
      method: 'GET'
    });

    expect(httpObj.request.headers.has('Authorization')).toBeTruthy();
    expect(httpObj.request.headers.get('Authorization')).toEqual(accessToken);
  }));

  it('Should return products', inject([HttpClient, BASE_URL_TOKEN], (
    http: HttpClient,
    baseUrl: string
  ) => {
    http.get('/products')
      .subscribe((products) => {
        expect(products).toEqual(mockedProducts);
      });

    const httpObj = httpMocked.expectOne({
      url: `${baseUrl}/products`,
      method: 'GET'
    });

    httpObj.flush({data: mockedProducts})


  }));
});
