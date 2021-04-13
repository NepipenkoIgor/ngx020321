import { ProductsFilterPipe } from './products-filter.pipe';
import { IProduct } from './store/reducers/products.reducers';

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

describe('ProductsFilterPipe', () => {
  let productsFilterPipe: ProductsFilterPipe;

  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  });

  it('Should transform right', () => {
    expect(productsFilterPipe.transform(mockedProducts, '')).toEqual(mockedProducts);
    const [first] = mockedProducts;
    expect(productsFilterPipe.transform(mockedProducts, '2345')).toEqual([first]);
    const [, result] = mockedProducts;
    expect(productsFilterPipe.transform(mockedProducts, '', true)).toEqual([result]);
  });
});
