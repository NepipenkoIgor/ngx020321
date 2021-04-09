import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store';
import { increment } from '../../store/actions/counter.actions';

interface IAuthUser {
  username: string;
  password: string;
}

@Component({
  selector: 'course-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<IRootState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(increment({counterName: 'counter1'}));
  }

  public login(user: IAuthUser): void {
    console.log(user);
  }
}
