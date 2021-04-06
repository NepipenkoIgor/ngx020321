import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  public login(user: IAuthUser): void {
    console.log(user);
  }
}
