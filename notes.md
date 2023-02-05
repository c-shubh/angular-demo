- `ng new workshop-demo`
- open vscode `code .`
- in vscode terminal: `ng serve` -> open browser
- show the default served site -> explain folder structure
- delete app.component.html contents
- open `app.component.ts` and explain stuff
-
- add external css to `index.html`
- add global styles to `styles.css`
- add styles to app component css
-
- vscode new terminal: add component navbar `ng generate component navbar`
- add `<app-navbar></app-navbar>` to `app.component.html`
- explain stuff by opening generated files
- type out navbar html file
- edit navbar css file
- 
- `ng generate component home`
- `ng generate component login`
- `ng generate component todo-list`
-
-
- add `<router-outlet></router-outlet>` 
- make path component connection
- 
-
- add reactive form module, login form ts, html, css
-
-
- add todo html
- add todo css
- hook up 1st form 
- todo service



## Angular

- lifecycle methods
- by default custom elements have `display: inline`
- `ng generate component <name> -b`
- `:host` in CSS
- basic folder structure

### Decorators
- [`Component`](https://angular.io/api/core/Component)
- [`Input`](https://angular.io/api/core/Input)
- [`Injectable`](https://angular.io/api/core/Injectable)
  
### What are spec files?
  
### [Directives](https://angular.io/guide/built-in-directives#built-in-structural-directives)

Defined by modules

-  `*ngIf`
-  `*ngFor`
  
### [Event binding](https://angular.io/guide/event-binding)
  
-  `(click)`
  
### [Data binding](https://angular.io/guide/two-way-binding)
  
-  `[(ngModel)]` - Two way data binding

### [Interpolation binding](https://angular.io/guide/interpolation)

- `{{ hero.name }}`
  
### [Class binding](https://angular.io/guide/class-binding)
  
-  `[class.selected]`
  
### [Property binding](https://angular.io/guide/property-binding)
  
  
## Typescript
  
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) `@`
- [Optional properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties) `?:`
- [Parameter properties](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties) -- used in dependency injection for service
- [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)