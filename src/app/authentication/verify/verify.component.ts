import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'cops-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  isLoading:Boolean = true;
  notiIcon: String = '';
  notiType: String = '';
  notiTitle: String = '';
  notiDescription: String = '';
  notiAction: String = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verifyToken();
  }

  verifyToken() {
    let data = { token: this.route.snapshot.params['token'] };
    this.userService.verify(data).subscribe(
      res => {
        this.isLoading = false;
        this.notiAction = 'Sign In';
        this.notiTitle = res.message;
        this.notiDescription = 'Now you can Sign In to Cloud COpS with your verified email.';
        this.notiType = 'success';
        this.notiIcon = 'check_circle_outline';
      },
      err => {
        this.isLoading = false;
        this.notiTitle = err.error.message;
        this.notiAction = 'Verify Email';
        this.notiDescription = 'Request for a new link by following the below link.';
        this.notiType = 'error';
        this.notiIcon = 'error_outline';
        console.log(err);
      }
    )
  }

  onActionClicked(e) {
    if (this.notiType === 'error') {
      this.router.navigate(['/auth/signin/verify']);
    }else {
      this.router.navigate(['/']);
    }
  }
}
