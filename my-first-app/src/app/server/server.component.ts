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
  getBackground() {
   return this.serverStatus == 'offline' ? 'red' : 'green';
  }
  getColor() {
     return this.serverStatus == 'offline' ? 'text-black' : 'text-white';
    }
}
