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

@Component({
  selector: 'course-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
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

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {

    this.setDrawerControl.emit(this.sidenav);
  }

}
