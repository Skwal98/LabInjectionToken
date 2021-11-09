import { AfterContentInit, AfterViewInit, Component, forwardRef, Inject, InjectFlags, Injector, OnInit, SkipSelf, TemplateRef, ViewChild } from '@angular/core';
import { Templ } from './di/directives/base-dir.component';
import { FirstDirective } from './di/directives/dirs/first.directive';
import { ThirdDirective } from './di/directives/dirs/third.directive';
import { SomeService } from './services/some.service';
import { Car, defaultCarToken } from './tokens/car.token';

//article https://habr.com/ru/company/tinkoff/blog/523160/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [{
    //we override token, and component and child get this value
    provide: defaultCarToken,
    useValue: new Car("car from app component")
  },
  {
    provide: ThirdDirective,
    useExisting: AppComponent
  },
  {
    provide: 'test',
    useValue: 55
  }],
  
})
export class AppComponent implements Templ, OnInit, AfterContentInit, AfterViewInit {

  //Inject working in:
  //providers
  //ctor services
  //ctor modules
  //f.e. :
  //carToken = Inject(defaultCarToken);
  //!Not working in component
  //Support injection flags

  //default way get dependency by ctor component
  //can use inject flags: @Optional, @Seld, @skipSelf, @Host
  //constructor(@Inject(defaultCarToken) carToken: Car){ }


  //we can use Inject "by hand", not recomended!
  // const former = setCurrentInjector(injector);
  //const service = inject(HelloService);
  //setCurrentInjector(former);
  
 
  constructor(public injector: Injector, service: SomeService){
      
      //get dependency use injector (not support inject flags!!! bug api: https://github.com/angular/angular/issues/31776 [close])
      const carToken = injector.get(defaultCarToken);

      //we can 'change' field object, and all other components will be get a new value
      //carToken.title = 'new'
      console.log(carToken.title);
  }

  ngAfterViewInit(): void {
    console.log('after view init');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  injectToken(){
    const car = this.injector.get(defaultCarToken);
    console.log('inject again: '+ car.title);
    console.log(this.template);
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  log(text: string){
    console.count(text);
  }
  

  @ViewChild('tml') public tm: TemplateRef<any>;

  public get template(){
    return this.tm;
  }
}
