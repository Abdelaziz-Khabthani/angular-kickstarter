import { Directive, OnChanges, Input, SimpleChanges, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnChanges, OnInit {
  @Input() appUnless: boolean;

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit() {
    if (this.appUnless){
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.template);
    } 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appUnless && !changes.appUnless.firstChange) {
      if (changes.appUnless.currentValue) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.createEmbeddedView(this.template);
      }
    }
  }
}
