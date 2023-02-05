import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit() {
    /* POST form data to server here */
    alert(JSON.stringify(this.loginForm.value));
    this.loginForm.reset();
    this.router.navigateByUrl('/');
  }
}
