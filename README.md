DI:

[1] useFactory - factory created only once.

[2] directive with tree shakeable providers cannot get Element (only if override in component providers)

[3] child component can inject value from parent providers

Directives:

[1] Can inject component to directive

[2] Can inject parent component to directive

[3] Directive can inject other directive from same element!

[4] Directive can't inject yourself (Circular dependency in DI detected)

[5] Directive can't inject parent directive / from ng-content

[6] Can provide value from component, that can inject all children

[7] Can inject parent component in component

[8] Contructors directive invoke before OnInit component

[8] Can send templateRef to directive as @Input (will be set after ContentInit component)

Type providers:

```
providers: {
    provide: ProvideValue/Token,
    useValue: ...,
    useFactory: ...,
    useExist: ...,
    useClass: ... (will be create instance class)
    multi: true/false,
    deps: ...
}
```

Order:

OnInit:

    - Parent component (1)
    - Directive (from parent) (3)
    - Child component (4)
    - Directive (from child) (7)

ContentInit:

    - Parent component (2)
    - Directive (from parent) (5)
    - Children component (6)
    - Directive component (from child) (8)

ViewInit:

    - Directive (from child) (9)
    - Directive (from parent) (10)
    - Children component (11)
    - Parent component (12)
