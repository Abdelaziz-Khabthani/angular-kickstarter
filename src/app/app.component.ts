import { Component } from '@angular/core';
import { GenericService } from './services/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [GenericService] // Hiarichal Injection, to all AppComponents children
})
export class AppComponent {
  log(str) {
    console.log(str);
  }
}