import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchText: string): IProduct[] {
    console.log('PIPE!!!!!!');
    return products.filter((product: IProduct) => {
      return `${product.title} ${product.price}`.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
