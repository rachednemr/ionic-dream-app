import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  allowNewServer = false;
  serverCreated = false;
  serverName = 'Placeholder';
  username = '';
  serverCreationStatus = 'No Server created!';
  constructor() {
  setTimeout(()=> {
    this.allowNewServer = true;
  }, 1000);
  }
  onCreateServer() {
  this.serverCreated = true;
    this.serverCreationStatus = 'Server '+this.serverName+' created!';
  }
  onUpdateServerName(event: Event) {
    this.serverName =(<HTMLInputElement>event.target).value;
  }
  onUpdateUser(event: Event) {
  }
}
