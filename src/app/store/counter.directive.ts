import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements OnChanges {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }

  @Input()
  appCounterOf: number;

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.appCounterOf; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
   }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}
