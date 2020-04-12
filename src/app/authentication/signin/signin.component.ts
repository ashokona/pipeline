import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'cops-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  cantAccessForm: FormGroup;
  cantAccess: Boolean = false;
  isSigninLoading = false;
  isCantAccessLoading = false;
  cantAccessContent = 'Send verification link';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initForms();
    this.initView();
  }

  initForms() {
    this.signinForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.cantAccessForm = this.formBuilder.group({
      cantAccess: new FormControl('sendVerifyEmail', Validators.required),
      email: new FormControl('', [Validators.required, , Validators.email]),
    });
  }

  initView() {
    const type = this.route.snapshot.params['type'];
    if (type === 'verify') {
      this.cantAccess = true;
      this.cantAccessForm.value.cantAccess = 'sendVerifyEmail';
    } else if (type === 'reset') {
      this.cantAccess = true;
      this.cantAccessForm.value.cantAccess = 'forgotPassword';
    } else {
      this.cantAccess = false;
    }
  }

  onSignin() {
    this.isSigninLoading = true;
    const data = this.signinForm.value;
    this.userService.signin(data).subscribe(
      res => {
        this.toastr.success(res.message, '', { timeOut: 3000 });
        this.isSigninLoading = false;
        if (res.data.user.isConfigured) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/settings']);
        }
      },
      err => {
        this.isSigninLoading = false;
        this.toastr.error(err.error.message, '', { timeOut: 10000 });
      }
    );
  }

  onCantAccessChanged() {
    this.cantAccessContent = (this.cantAccessForm.value.cantAccess === 'sendVerifyEmail') ? 'Send verification link' : 'Reset Password';
  }

  onCantAccess() {
    // this.cantAccessContent = 'Sending...';
    this.isCantAccessLoading = true;
    this.userService.cantAccess(this.cantAccessForm.value.cantAccess, {email: this.cantAccessForm.value.email }).subscribe(
      res => {
        this.cantAccess = false;
        this.isCantAccessLoading = false;
        this.toastr.success(res.message, '', { timeOut: 5000 });
      },
      err => {
        this.onCantAccessChanged();
        this.isCantAccessLoading = false;
        this.toastr.error(err.error.message, '', { timeOut: 10000 });
      }
    );
  }

  onSignUp() {
    if (this.signinForm.value) {
      this.userService.signInFromData.next(this.signinForm.value);
    }
    this.router.navigate(['auth/signup']);
  }

}
