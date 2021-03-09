import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = {text: 'ngx020321'};
  public drawer!: MatDrawer;
  public searchTerm = 'Samsung';

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor(
    // private applicationRef: ApplicationRef,
  ) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      console.log('Set Title');
      this.title.text = 'New Title';
    }, 5000);

    setTimeout(() => {
      console.log('Set Title again');
      this.title = {text: 'New Title 111'};
    }, 10000);

    // setTimeout(() => {
    //   this.applicationRef.tick();
    // }, 10000);
  }


  public setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }
}


// Interval
// Http
// click
