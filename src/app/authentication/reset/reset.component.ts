import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'cops-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  passwordForm: FormGroup;
  token: string;
  matcher = new MyErrorStateMatcher();
  isPasswordReset: Boolean;
  isLoading: Boolean = false;
  notiIcon: String = '';
  notiType: String ;
  notiTitle: String = '';
  notiDescription: String = '';
  notiAction: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validator: this.checkPasswords });
  }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  
  onResetPassword() {
    this.isLoading = true;
    const data = {
      password : this.passwordForm.value.password,
      token: this.token
    }
    this.userService.resetPassword(data).subscribe(
      res => {
        this.isLoading = false;
        this.notiAction = 'Sign In';
        this.notiTitle = res.message;
        this.notiDescription = 'Now you can Sign In to Cloud COpS with your new password';
        this.notiType = 'success';
        this.notiIcon = 'check_circle_outline';
      },
      err => {
        this.isLoading = false;
        this.notiTitle = err.error.message;
        this.notiAction = 'Reset Password';
        this.notiDescription = 'Request for a new link by following the below link.';
        this.notiType = 'error';
        this.notiIcon = 'error_outline';
        this.notiAction = 'Reset Password';
      }
    )
  }

  onActionClicked(e) {
    if (this.notiType === 'error') {
      this.router.navigate(['/auth/signin/reset']);
    }else {
      this.router.navigate(['/']);
    }
  }
}
