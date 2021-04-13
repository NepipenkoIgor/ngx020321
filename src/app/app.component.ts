import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IRootState } from './store';
import { logout } from './store/actions/auth.actions';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<IRootState>,
  ) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(logout());
    }, 10000);
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('!!!!!!', event);
      });
  }
}
