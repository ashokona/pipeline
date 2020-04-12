import { Directive, Input, ComponentFactory, ComponentRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';

@Directive({
  selector: '[copsBlockLoader]'
})
export class BlockLoaderDirective {
  loadingFactory: ComponentFactory<LoadingComponent>;
  loadingComponent: ComponentRef<LoadingComponent>;

  @Input('copsBlockLoader')
  set apploading(value: boolean) {
    this.vcRef.clear();
    if (value) {
      // create and embed an instance of the loading component
      this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
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
    this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent);
  }
}
