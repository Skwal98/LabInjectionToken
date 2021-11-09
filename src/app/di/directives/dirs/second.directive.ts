import { AfterContentInit, AfterViewInit, Directive, ElementRef, Inject, OnInit, ViewContainerRef } from "@angular/core";
import { Templ } from "../base-dir.component";
import { FirstDirective } from "./first.directive";

@Directive({
  selector: "[second]"
})
export class SecondDirective implements AfterViewInit, AfterContentInit, OnInit {

  constructor(@Inject(FirstDirective) readonly fd: Templ, 
  readonly elRef: ElementRef, readonly container: ViewContainerRef) {

   

    console.log('[Constructor] Second directive');
  }

  ngOnInit(): void {
    console.log('oninit directive');
  }

  ngAfterContentInit(): void {
    console.log('after content init directive');
  }

  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.fd.template);
    console.log(this.fd.template);
    console.log(this.container);
    console.log('after view init directive');
  }

}
