import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private router: Router
  ) {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
