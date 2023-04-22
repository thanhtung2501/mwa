import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { StateService, init_state } from '../services/state.service';
import { Subscription } from 'rxjs';
import { IState } from '../models/state';

@Component({
  selector: 'app-hearder',
  templateUrl: 'hearder.component.html',
  styles: [
  ]
})
export class HearderComponent {
  state!: IState;

  private stateService = inject(StateService);
  private subscription!: Subscription;

  constructor(private router: Router) {
    this.subscription = this.stateService.getState().subscribe(state => {
      this.state = state;
    });
  }

  clickLogin() {
    this.router.navigate(['', 'login']);
  }

  clickLogout() {
    this.stateService.setState(init_state);
    this.router.navigate(['', 'home']);
  }

  clickSignup() {
    this.router.navigate(['', 'signup']);
  }

  clickHome(){
    this.router.navigate([''])
  }
}
