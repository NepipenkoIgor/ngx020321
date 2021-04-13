import { ICartProduct } from '../../../../../store/reducers/cart.reducers';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';
import { OneProductInCartComponent } from './one-product-in-cart.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

const mockedProduct: ICartProduct =
  {
    '_id': '6075cb51dc844adecfeffed8',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': false,
    count: 1
  };


describe('Hidden directive', () => {

  let fixture: ComponentFixture<OneProductInCartComponent>;
  let component: OneProductInCartComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductInCartComponent],
      imports: [MatButtonModule, MatIconModule, FlexLayoutModule]
    });
    fixture = TestBed.createComponent(OneProductInCartComponent);
    component = fixture.componentInstance;
    component.product = mockedProduct;
    fixture.detectChanges();

    spyOn(component.increment, 'emit')
      .and
      .callThrough();

    spyOn(component.decrement, 'emit')
      .and
      .callThrough();


    spyOn(component.remove, 'emit')
      .and
      .callThrough();

    spyOn(component, 'incrementProduct')
      .and
      .callThrough();

    spyOn(component, 'decrementProduct')
      .and
      .callThrough();


    spyOn(component, 'removeProduct')
      .and
      .callThrough();

  });

  it('Should should decrement', () => {
    const el = fixture.debugElement.query(By.css('.decrement'));
    el.triggerEventHandler('click', {});
    expect(component.increment.emit).not.toHaveBeenCalled();
    expect(component.decrement.emit).toHaveBeenCalledTimes(1);
    expect(component.remove.emit).not.toHaveBeenCalled();
  });
});
