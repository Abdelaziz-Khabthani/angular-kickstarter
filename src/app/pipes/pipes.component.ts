import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  private asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello again')
    }, 500);
  }) 

  private objs: {label: string, value: string}[] = [
    {
      value: 'valueOne',
      label: 'labelOne'
    },
    {
      value: 'valueTwo',
      label: 'labelTwo'
    }
  ];
  private text: string = 'hello world';
  private date: Date = new Date();
}
