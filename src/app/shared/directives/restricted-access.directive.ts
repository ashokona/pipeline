import { Directive, ElementRef, Renderer2, Inject, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RestrictedAccessComponent } from '../components/restricted-access/restricted-access.component';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[copsRestrictedAccess]'
})
export class RestrictedAccessDirective implements OnInit {
  componentInstance;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    if (this.userService.updatedUser) {
      let updatedUser = this.userService.updatedUser;
      if (!(updatedUser.subscription && updatedUser.subscription.licenceType === 'premium'
        && new Date(updatedUser.subscription.endDate) > new Date())) {
        this.renderer.setStyle(this.elem.nativeElement, 'position', 'relative');
        this.renderer.setStyle(this.elem.nativeElement, 'opacity', '0.6');
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RestrictedAccessComponent);
        this.componentInstance = this.viewContainerRef.createComponent(componentFactory);

        const loaderComponentElement = this.componentInstance.location.nativeElement;
        const sibling: HTMLElement = loaderComponentElement.previousSibling;
        sibling.insertBefore(loaderComponentElement, sibling.firstChild);
      }
    }
  }

}
