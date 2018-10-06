import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  value: string = 'hello';
  @Input() input: string;
  @Output() output: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('hash') hash: ElementRef;
  @ContentChild('external') external: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.output.emit('(output) testComponent is ready');
    console.log('[input] is ' + this.input);
    console.log(this.external);
  }

  onInputChange(event: Event) {
    this.value = (<HTMLInputElement> event.target).value;
    this.hash.nativeElement.value = (<HTMLInputElement> event.target).value;
  }

}
