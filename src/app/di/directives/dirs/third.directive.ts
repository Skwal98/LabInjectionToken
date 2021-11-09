import { Directive } from "@angular/core";

@Directive({
  selector: "[third]"
})
export class ThirdDirective {

  constructor() {
    console.log('[Constructor] Third directive');
  }

}