import { Directive, ElementRef, Renderer2, Inject, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UnderDevComponent } from '../components/under-dev/under-dev.component';

@Directive({
  selector: '[copsUnderDev]'
})
export class UnderDevDirective implements OnInit {
  componentInstance;

  constructor(
    private elem: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  ngOnInit() {
    // const child = document.createElement('div');
    // child.className = 'under-dev';
    // this.renderer.appendChild(this.elem.nativeElement, child);
    this.renderer.setStyle(this.elem.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.elem.nativeElement, 'opacity', '0.5');
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UnderDevComponent);
    this.componentInstance = this.viewContainerRef.createComponent(componentFactory);

    const loaderComponentElement = this.componentInstance.location.nativeElement;
    const sibling: HTMLElement = loaderComponentElement.previousSibling;
    sibling.insertBefore(loaderComponentElement, sibling.firstChild);
  }

}
