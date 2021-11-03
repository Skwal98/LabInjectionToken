import { InjectionToken } from "@angular/core";

export const defaultCarToken = new InjectionToken("Default factory for creation car", {
    factory: () => {
        console.log("factory car");
        return new Car("Default car");
    }
})

export class Car {
    title: string;

    constructor(title: string){
        this.title = title;
    }
}