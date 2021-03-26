import { Component, Input, NgModule, OnDestroy } from '@angular/core';
import { IProduct } from '../../products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
