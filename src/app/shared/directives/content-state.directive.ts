import { Directive, Input, ComponentFactory, ComponentRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ContentStateComponent } from '../components/content-state/content-state.component';

@Directive({
  selector: '[copsContentState]'
})
export class ContentStateDirective {
  loadingFactory: ComponentFactory<ContentStateComponent>;
  loadingComponent: ComponentRef<ContentStateComponent>;

  @Input('copsContentState')
  set apploading(value: string) {
    this.vcRef.clear();
    if (value) {
      // create and embed an instance of the loading component
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
      this.loadingComponent.instance.state = value;
      let element: HTMLElement = <HTMLElement>this.loadingComponent.location.nativeElement;
    
      // adding styles
      // element.classList.add('col-8 float-left');
      element.style.height = "100%";        
      // this.loadingComponent.instance.someObservableOrEventEmitter.subscribe(data => this.prop = data);
    } else {
      // embed the contents of the host template
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    // Create resolver for loading component
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(ContentStateComponent);
    
  }
}
