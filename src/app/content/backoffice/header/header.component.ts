import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store';
import { totalProductsCount } from '../../../store/selectors/cart.selectors';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input()
  public title!: { text: string };

  @Input()
  public drawer!: MatDrawer;
  //
  // @Input()
  // public set title(v: string) {
  //   if (!v) {
  //     return;
  //   }
  //   this.myTitle = v;
  // };

  public isOpen = false;

  public cartProductsCount$ = this.store.select(totalProductsCount);

  constructor(
    private store: Store<IRootState>
  ) {
  }

  ngOnInit(): void {
  }

  public toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    this.drawer.toggle();
  }

}
