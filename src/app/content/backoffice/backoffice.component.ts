import { Component} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'course-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public title = {text: 'ngx020321'};
  public drawer!: MatDrawer;

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';


  public setDrawer(drawer: MatDrawer): void {
    this.drawer = drawer;
  }

}
