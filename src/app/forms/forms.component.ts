import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @ViewChild('form') private form: NgForm;
  @ViewChild('name') private name: NgModel;

  private nameDefaultValue:string = 'Abdelaziz Khabthani';
  private emailValue: string = '';

  onSubmit() {
    console.log(this.form);
    console.log(this.name);
  }

  reset() {
    this.form.reset();
  }

  setValues() {
    this.form.setValue({
      name: "setName",
      email: "set@email.com"
    });
    // this.form.form.patchValue({
    //   name: "patchName"
    // });
  }
}
