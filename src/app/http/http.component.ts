import { Component, ViewChild, ElementRef } from '@angular/core';
import { ObjService } from './obj.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  private name: Observable<string> = this.objService.getName();

  private objs: {label: string, value: string}[] = [];
  private value:string = "";
  @ViewChild('new') private new: ElementRef;

  constructor(private objService: ObjService) {}

  addObj(value: string) {
    this.objs.push({
      label: value,
      value: value
    });
    this.new.nativeElement.value = '';
  }

  post() {
    this.objService.postObjs(this.objs).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  put() {
    this.objService.putObjs(this.objs).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  get() {
    this.objService.getObjs().subscribe(
      (response: {label: string, value: string}[]) => {
        console.log(response);
      }, 
      error => console.log(error)
    )
  }
}
