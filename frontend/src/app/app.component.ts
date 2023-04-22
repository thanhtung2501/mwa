import { Component, inject } from '@angular/core';
import { IState } from './models/state';
import { Subscription } from 'rxjs';
import { StateService } from './services/state.service';

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
  state!: IState;

  private subscription!: Subscription;
  private stateService = inject(StateService);

  constructor() {
    this.subscription = this.stateService.getState().subscribe(state => {
      this.state = state;
    });
  }
}
