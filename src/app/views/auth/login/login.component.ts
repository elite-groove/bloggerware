import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router } from '@angular/router';
import { FormParser } from 'src/app/classes/form-parser';
import { AuthUser } from 'src/app/interfaces/auth-user';
import { Token } from 'src/app/interfaces/token';
import { UtilityService } from 'src/app/services/utility.service';
import { Subscription } from 'rxjs';
import { AuthConfig } from 'src/app/interfaces/auth-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _window: Window = window;
  subscriptions = new Subscription();
  validateForm: FormGroup;
  authConfig: AuthConfig;

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private router: Router, private formParser: FormParser, private utility: UtilityService) {
  }

  submitForm($e, form): void {
    $e.preventDefault();
    const formValues = this.formParser.parse(form) as AuthUser;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(formValues);
    formValues.strategy = 'local';
    this.authService.localLogin(formValues).subscribe(
      (token: Token) => {
        console.log(token);
        this.authService.saveToken(token);
        this.utility.createNotification('success', 'Exitoso', 'Acceso a su cuenta.');
        this.router.navigate(['/blog/create']);
      }, err => {
        this.utility.createNotification('error', 'error', `Algo salio mal\n ${err.message}`);
      }
    );

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
