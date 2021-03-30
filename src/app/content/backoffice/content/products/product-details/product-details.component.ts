import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'course-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product$ = this.activatedRoute.data.pipe(pluck('product'));

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap.get('productId'));
    });

    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
    });
  }

}
