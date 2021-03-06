import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './store/reducers/products.reducers';

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchText: string, onlyFavorites: boolean = false): IProduct[] {
    let result: IProduct[] = products;
    if (onlyFavorites) {
      result = result.filter((product: IProduct) => {
        return product.isFavorite === onlyFavorites;
      });
    }
    if (!searchText) {
      return result;
    }
    return result.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
