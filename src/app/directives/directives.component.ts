import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent {
  value:number = 1;
  odd:boolean = true;
  odds:number[] = [1, 3, 5];
  evens:number[] = [2, 4];
}
