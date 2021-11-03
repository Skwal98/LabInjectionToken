import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './components/second.component';
import { CustomDirective } from './directives/custom.directive';
import { Car, defaultCarToken } from './tokens/car.token';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    //we override token, and all modules will be get this value
    //factory from car.token.ts not will be invoke 
    provide: defaultCarToken,
    useValue: new Car("car from module")
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }