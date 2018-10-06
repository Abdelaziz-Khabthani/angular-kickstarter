import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Output()
  public onServerAdded = new EventEmitter<string>();

  public allowAddingServers: boolean = false;
  public message: string = 'No server was created';
  public value: string = '';
  public serverCreated: boolean = false;
  public servers = [{serverId: "10", serverStatus: "online"}];

  constructor() {
    setTimeout(() => {
      this.allowAddingServers = true;
    }, 2000);
  }

  onButtonClick() {
    this.onServerAdded.emit(this.value);
    this.serverCreated = true;
    this.servers.push({serverId: this.value, serverStatus: "online"});
    this.message = this.value + ' server was created';
  }

  onInputChange(event: Event) {
    this.value = (<HTMLInputElement> event.target).value;
  }

  ngOnInit() {
  }

}
