import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[copsButtonLoading]'
})
export class ButtonLoadingDirective {
  buttonContent: string;
  @Input('copsButtonLoading')
  set loadingState(value) {
    const ctrl = this.element.nativeElement;
    if (value) {
      ctrl.innerHTML = `Loading <i class="fa fa-circle-o-notch fa-spin"></i>`;
      this.renderer.addClass(ctrl, 'loading');
    } else {
      if (this.buttonContent) {
        ctrl.innerHTML = this.buttonContent;
      }
      this.renderer.removeClass(ctrl, 'loading');
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.buttonContent = this.element.nativeElement.innerHTML;
  }

}
