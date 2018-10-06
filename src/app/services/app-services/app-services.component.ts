import { Component, OnInit } from '@angular/core';
import { LogginService } from '../logging.service';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css'],
  //providers: [LogginService]
})
export class AppServicesComponent {

  constructor(private logginService: LogginService, private genericService: GenericService) { }

  onClick() {
    //this.genericService.generic();
    this.logginService.log('yo')!
  }
}
