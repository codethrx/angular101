import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularbasics';
  constructor(private r: Router) {}
  log(data: any) {
    console.log('Logged..', data);
  }
  route(content: any) {
    this.r.navigate(['/parameters', content]);
  }
}
