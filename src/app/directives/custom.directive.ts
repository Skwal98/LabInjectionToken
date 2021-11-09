import { AfterContentInit, AfterViewInit, Directive, HostListener, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";

@Directive({
  selector: "[custom]"
})
export class CustomDirective implements AfterViewInit, AfterContentInit, OnInit {
  //we can inject component or PARENT! component in ctor directive
  constructor(private appComponent: AppComponent) {}

  @HostListener("click")
  increment() {
      this.appComponent.log('from custom directive!');
  }

  
  ngOnInit(): void {
    console.log('oninit parent directive');
  }

  ngAfterContentInit(): void {
    console.log('after content init parent directive');
  }

  ngAfterViewInit(): void {
    console.log('after view init parent directive');
  }
}