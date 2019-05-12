import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { FormParser } from 'src/app/classes/form-parser';
import { AuthUser } from 'src/app/interfaces/auth-user';
import { Token } from 'src/app/interfaces/token';
import { Router } from '@angular/router';
import { LocalUser } from 'src/app/interfaces/local-user';
import { NzNotificationService } from 'ng-zorro-antd';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private formParser: FormParser,
    private router: Router, private utilityService: UtilityService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(form): void {
    const formValues = this.formParser.parse(form) as AuthUser;
    formValues.strategy = 'local';
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    console.log(formValues);
    this.authService.localRegister(formValues).subscribe(
      (user: LocalUser) => {
        if (user._id) {
          this.authService.saveToken(user.token);
          this.authService.saveUserId(user);
          this.utilityService.createNotification('success', 'Exitoso', `Tu cuenta se creo con exito.`);
          this.router.navigate(['/blog/create']);
        }
      }, err => {
        this.utilityService.createNotification('error', 'Error', `Algo salio mal.\n ${err.message}`);
      }
    );

  }

}
