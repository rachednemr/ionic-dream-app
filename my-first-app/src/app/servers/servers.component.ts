import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No Server created!';
  constructor() {
  setTimeout(()=> {
    this.allowNewServer = true;
  }, 1000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event) {
    this.serverName =(<HTMLInputElement>event.target).value;
  }
}
