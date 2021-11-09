import { Directive, ElementRef, Inject, TemplateRef, ViewContainerRef } from "@angular/core";
import { CustomDirective } from "src/app/directives/custom.directive";
import { SecondDirective } from "./second.directive";
import { ThirdDirective } from "./third.directive";

@Directive({
  selector: "[firstDir]"
})
export class FirstDirective {

  template: TemplateRef<any>;

  constructor(templateRef: TemplateRef<any>, element: ElementRef, container: ViewContainerRef) {
      //console.log(element);
      //container.createEmbeddedView(templateRef);
      console.log('[Constructor] First directive');
      this.template = templateRef;
  }

}