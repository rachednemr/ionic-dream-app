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
  servers = ['tomCat', 'nginx'];
  serverCreationStatus = 'No Server created!';
  constructor() {
  setTimeout(()=> {
    this.allowNewServer = true;
  }, 1000);
  }
  onCreateServer(event: Event) {
  this.serverCreated = true;
    this.serverCreationStatus = 'Server '+this.serverName+' created!';
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName =(<HTMLInputElement>event.target).value;
  }
  onUpdateUser(event: Event) {
  }
}
