import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template : `<h1>Gestion des rapports de visite</h1>
              <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-laborie';
}
