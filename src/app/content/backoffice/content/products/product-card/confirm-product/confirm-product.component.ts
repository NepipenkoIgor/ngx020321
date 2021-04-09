import { Component, Input, NgModule, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IProduct } from '../../store/reducers/products.reducers';

@Component({
  selector: 'course-confirm-product',
  templateUrl: './confirm-product.component.html',
  styleUrls: ['./confirm-product.component.css']
})
export class ConfirmProductComponent implements OnDestroy {

  @Input()
  public product!: IProduct;

  @Input()
  public save!: () => void;

  @Input()
  public close!: () => void;

  public ngOnDestroy(): void {
    console.log('DESTROY ConfirmProductComponent');
  }
}

@NgModule({
  declarations: [ConfirmProductComponent],
  imports: [MatCardModule, MatButtonModule]
})
export class ConfirmProductModule {

}
