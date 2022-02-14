import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  getServerStatus() {
  return this.serverStatus;
  }
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
  }
  getColor() {
   return this.serverStatus == 'offline' ? 'red' : 'green';
  }
}
