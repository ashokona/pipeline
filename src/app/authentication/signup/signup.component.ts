import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cops-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  isSignupLoading: Boolean = false;
  showPassword: Boolean= false;
  notiIcon: String = '';
  notiType: String;
  notiTitle: String = '';
  notiDescription: String = '';
  notiAction: String = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signUpForm = this.formBuilder.group({
      companyName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // mobile: new FormControl('')
    });
    this.userService.signInFromData.subscribe(
      data => {
        if (data) {
          this.signUpForm.controls['email'].setValue(data.email);
          this.signUpForm.controls['password'].setValue(data.password);
        }
      }
    );
  }

  onSignUp() {
    const data = this.signUpForm.value;
    this.isSignupLoading = true;
    this.userService.signup(data).subscribe(
      res => {
        // this.toastr.success(res.message, '', { timeOut:10000 });
        // this.router.navigate(['/']);
        this.isSignupLoading = false;
        this.notiAction = 'Sign In';
        // this.notiTitle = res.message;
        this.notiTitle = 'Check your inbox for the verification email';
        this.notiDescription = `We sent a message to ${data.email} from support@megaops.io to verify your identity. You can continue to signin once verified.`;
        this.notiType = 'success';
        this.notiIcon = 'check_circle_outline';
      },
      err => {
        console.log(err);
        this.isSignupLoading = false;
        this.toastr.error(err.error.message, '');
      }
    );
  }

  onActionClicked(e) {
    this.router.navigate(['/']);
  }
}
