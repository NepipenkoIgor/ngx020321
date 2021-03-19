import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

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

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
    console.log('title ==>', this.title);
  }

  ngOnInit(): void {
    //   this.changeDetectorRef.detach();
    setTimeout(() => {
      this.changeDetectorRef.detectChanges();
    }, 8000);
    //   console.log('title ==>', this.title);
  }

  public toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    this.drawer.toggle();
  }

}
