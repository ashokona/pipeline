import { Directive, Input, ContentChild, OnInit, ViewChild } from '@angular/core';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[copsDisableState],[copsDisableByGroup],[copsDisableBySubscription]'
})
export class DisableStateDirective implements OnInit {

  @ContentChild('eleRef', { static: true }) nativeChildRef;
  // @ViewChild('eleRef', { static: true }) viewChildRef;

  // @Input('copsDisableState') copsDisableState;
  @Input('copsDisableBySubscription') copsDisableBySubscription;
  @Input('copsDisableByGroup') copsDisableByGroup;

  constructor(private tokenService: TokenService,
    private userService: UserService) { }

  ngOnInit() {
    if (this.nativeChildRef) {
      // diable always
      // if (this.copsDisableState) {
      //   this.nativeChildRef.disabled = false;
      // }
      // diable based on subscription licenceType
      if (this.copsDisableBySubscription) {
        if (this.userService.updatedUser && this.userService.updatedUser.subscription
          && this.userService.updatedUser.subscription.licenceType === 'basic'
          ) {
          this.nativeChildRef.disabled = true;
        }
      }
      if (this.copsDisableByGroup) {
        const groups = this.tokenService.getGroups();
        const currentGroup = this.tokenService.getGroup();
        if (groups.readOnly.includes(currentGroup)) {
          this.nativeChildRef.disabled = true;
        }
      }
    }
  }
}

/**
// disable checkbox
@Component({
  selector: 'checkbox-overview-example',
  template: '<mat-checkbox #ref>Check me!</mat-checkbox>',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample implements OnInit {
  // @ContentChild('ref') nativeChildRef: any;
  @ViewChild('ref', {static: true}) nativeChildRef: any;
  ngOnInit() {
    // [disabled]="true"
    console.log('============', this.nativeChildRef);
    this.nativeChildRef.disabled = true;
  }
}
*/

/*
// disable tooltip
import { MatTooltip } from "@angular/material";
import { Directive,  ContentChild,  ViewChild,  OnInit,  OnDestroy,  Input } from "@angular/core";

@Component({
  selector: "tooltip-position-example",
  template: `
    <button
      mat-icon-button
      matTooltip="tt"
      #ref="matTooltip"
      matTooltipPosition="right"
      (click)="onCopyButtonClick()"
    >
      <mat-icon>content_copy</mat-icon>
    </button>
  `,
  styleUrls: ["tooltip-position-example.css"]
})
export class TooltipPositionExample implements OnInit {
  tt = "123";
  @ViewChild("ref") nativeChildRef: MatTooltip;

  ngOnInit() {
    this.nativeChildRef.message = "xdcvxbc";
    console.log("============", this.nativeChildRef);
    this.nativeChildRef.disabled = true;
  }

  onCopyButtonClick() {
    this.nativeChildRef.message = "xdcvxbc";
  }
}
*/
