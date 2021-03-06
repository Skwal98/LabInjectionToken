import { Component, Inject, Injector } from '@angular/core';
import { SomeService } from '../services/some.service';
import { Car, defaultCarToken } from '../tokens/car.token';

@Component({
  selector: 'app-second',
  template: 'second',
  providers: [],
})
export class SecondComponent {
  //not create from factory again
  //return same object as in app-component
  constructor(
    @Inject(defaultCarToken) carToken: Car,
    service: SomeService,
    @Inject('test') test
  ) {
    console.log('Inject from parent provider: ' + test);
    console.log(carToken.title);
  }
}
