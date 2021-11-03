import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
    //can use: useFactory, useValue, useExisting
    useFactory: (ins: SomeService) => {
        console.log('factory some service');
        console.log(ins);
        return ins ?? new SomeService();
    }
})
export class SomeService {

}