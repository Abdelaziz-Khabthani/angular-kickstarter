import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    @Input()
    public element: {serverId: any, serverStatus: string};
    @Input()
    public index: any;
    private serverStatus: string = 'offline';
    public serverId: number = 10;
    public server: string = 'server';
    
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';    
    }
    
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    public getServerStatus() {
        return this.serverStatus;
    }
}