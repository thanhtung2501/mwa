import { Component, inject } from '@angular/core';
import { IState } from '../models/state';
import { StateService } from '../services/state.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  state!: IState;

  private stateService = inject(StateService);
  private subscription!: Subscription;

  constructor(private router: Router) {
    this.subscription = this.stateService.getState().subscribe(state => {
      this.state = state;
    });
  }

}
