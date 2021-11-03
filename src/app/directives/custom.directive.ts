import { Directive, HostListener } from "@angular/core";
import { AppComponent } from "../app.component";

@Directive({
  selector: "[custom]"
})
export class CustomDirective {
  //we can inject component or PARENT! component in ctor directive
  constructor(private appComponent: AppComponent) {}

  @HostListener("click")
  increment() {
      this.appComponent.log('from custom directive!');
  }
}