import { Component, Inject, InjectFlags, Injector, SkipSelf } from '@angular/core';
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
  }]
})
export class AppComponent {

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

  injectToken(){
    const car = this.injector.get(defaultCarToken);
    console.log('inject again: '+ car.title);
  }

  log(text: string){
    console.count(text);
  }
}
