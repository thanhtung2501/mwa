import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hearder></app-hearder>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'frontend';
}
