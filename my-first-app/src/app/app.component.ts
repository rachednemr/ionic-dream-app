import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-first-app';
  showSecret = false;
  logs = [];
  onToggleSecret() {
    this.showSecret = !this.showSecret;
  }
  onToggleDetails() {
    this.logs.push(new Date());
  }
}
