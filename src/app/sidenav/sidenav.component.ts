import {
  AfterViewInit,
  EventEmitter,
  Component,
  OnInit,
  Output,
  ViewChild,
  ContentChild,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ProductsService } from '../products.service';

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  // providers: [
  //   {
  //     provide: ProductsService,
  //     useClass: ProductsService
  //   }
  // ]
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer')
  public sidenav!: MatDrawer;

  @ViewChild('contentPlace', {static: true, read: ViewContainerRef})
  public contentPlace!: ViewContainerRef;

  @ContentChild('tmpl', {static: true})
  public tmpl!: TemplateRef<any>;

  @Output()
  public setDrawerControl: EventEmitter<MatDrawer> = new EventEmitter(true);

  constructor(
    private  productsService: ProductsService
  ) {
    console.log(this.productsService);
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {

    this.setDrawerControl.emit(this.sidenav);
  }

}
