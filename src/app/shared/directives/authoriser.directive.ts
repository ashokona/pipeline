import { Directive, OnInit, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Directive({
  selector: '[copsAuthoriser]'
})
export class AuthoriserDirective implements OnInit {
  currentUser: any;
  private elem: ElementRef;
  // condition: boolean;

  // @Input() set copsAuthoriser(condition: boolean) {
  //     this.condition = condition;
  //   }
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.viewContainer.clear();
    this.userService.currentUser.subscribe(
      res => {
        this.currentUser = res;
        if (this.currentUser.role == 'admin' || this.currentUser.role === 'user') {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }
}
