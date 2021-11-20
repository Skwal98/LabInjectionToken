import { ElementRef, Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root',
}*/)
export class MyRootService {
  constructor(elementRef: ElementRef) {
    console.log('root service');
  }
}
