import { AfterContentInit, AfterViewInit, Component, ContentChild, forwardRef, Inject, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FirstDirective } from './dirs/first.directive';
import { ThirdDirective } from './dirs/third.directive';

@Component({
  selector: 'app-base-dir',
  templateUrl: 'base-dir.component.html',
  providers: [
    {
      provide: FirstDirective,
      useExisting: forwardRef(() => BaseDirComponent)
    }]
})
export class BaseDirComponent implements  Templ, AfterViewInit, AfterContentInit, OnInit {


  constructor(@Inject('test') val:number, app: AppComponent){
  }
  
  @ContentChild('tml') template: TemplateRef<any>;

  ngOnInit(): void {
    console.log('on init');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }
}

export interface Templ {
  template: TemplateRef<any>;
}