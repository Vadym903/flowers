import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthRequest } from "../../../_models/auth-request.model";
import { AuthService } from "../../../_services/auth-service.service";
import { RegistrationRequest } from "../../../_models/registration-request.model";

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegistration = false;
  authForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm(this.isRegistration);
  }

  setIsRegistration(isRegistration: boolean): void {
    this.isRegistration = isRegistration;
    this.initForm(isRegistration);
  }

  private initForm(isRegistration: boolean): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (isRegistration) {
      this.authForm.addControl('passwordRepeat', new FormControl([''], Validators.required));
      this.authForm.addControl('email', new FormControl([''], Validators.required));
      this.authForm.addControl('firstName', new FormControl([''], Validators.required));
      this.authForm.addControl('lastName', new FormControl([''], Validators.required));
    }
  }

  login(): void {
    const formValue = this.authForm.value;
    const authRequest = new AuthRequest();
    authRequest.username = formValue.username;
    authRequest.password = formValue.password;
    this.authService.login(authRequest).subscribe(response => {
      this.router.navigateByUrl('/items');
    });
  }

  registration(): void {
    const formValue = this.authForm.value;
    const authRequest = new RegistrationRequest();
    authRequest.username = formValue.username;
    authRequest.password = formValue.password;
    authRequest.password2 = formValue.passwordRepeat;
    authRequest.email = formValue.email;
    authRequest.first_name = formValue.firstName;
    authRequest.last_name = formValue.lastName;

    this.authService.registration(authRequest).subscribe(() => {
      const authRequest = new AuthRequest();
      authRequest.username = formValue.username;
      authRequest.password = formValue.password;
      this.authService.login(authRequest).subscribe(() => {
        this.router.navigateByUrl('/items');
      });
    });

  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
