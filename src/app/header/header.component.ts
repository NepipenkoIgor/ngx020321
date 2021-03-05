import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title = '';

  @Output()
  public toggle: EventEmitter<boolean> = new EventEmitter();

  public isOpen = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }

}
