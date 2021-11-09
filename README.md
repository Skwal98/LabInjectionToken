DI:

[1] useFactory - factory created only once.


Directives:

[1] Can inject component to directive
[2] Can inject parent component to directive
[3] Directive can inject other directive from same element!
[4] Directive can't inject yourself (Circular dependency in DI detected)
[5] Directive can't inject parent directive / from ng-content
[6] Can provide value from component, that can inject all children
[7] Can inject parent component in component
[8] Contructors directive invoke before OnInit component


Type providers:
providers: {
    provide: ProvideValue/Token,
    useValue: ...,
    useFactory: ...,
    useExist: ...,
    useClass: ... (will be create instance class)
    multi: true/false,
    deps: ...
}


Order:

 OnInit:
 
    - Parent component
    - Directive (from parent)
    - Child component
    - Directive (from child)
    
  ContentInit:
  
    - Parent component
    - Directive (from parent)
    - Children component
    - Directive component (from child)
    
  ViewInit:
  
    - Directive (from child)
    - Directive (from parent)
    - Children component
    - Parent component
