import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)], this.uniqueUserName.bind(this)],
    emails: this.fb.array([this.fb.control([])]),
    male: [true],
    password: this.fb.group({
      password: [''],
      cpassword: [''],
    }, {
      validators: [this.equalValidator]
    })
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
  }

  public ngOnInit(): void {
    this.getControl(this.signUpForm, 'username')
      .statusChanges.subscribe((status) => {
      console.log(status);
    });
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

  public signup(user: any): void {
    console.log(user);
  }

  public getControl(group: FormGroup, path: string): FormControl {
    return group.get(path) as FormControl;
  }

  public getArrayControl(group: FormGroup, path: string): FormControl[] {
    return (group.get(path) as FormArray).controls as FormControl[];
  }


  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control([]));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
  }

  private equalValidator({controls}: FormGroup): ValidationErrors | null {
    const {password, cpassword} = controls;
    const isEqual = password.value === cpassword.value;
    return isEqual ? null : {
      isEqual: true
    };
  }

  private uniqueUserName({value: username}: FormControl): Observable<ValidationErrors | null> {
    return this.http.post('/auth/checkUsername', {username});
  }

}
