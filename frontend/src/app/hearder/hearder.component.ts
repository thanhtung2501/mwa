import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { StateService, init_state } from '../services/state.service';
import { Subscription } from 'rxjs';
import { IState } from '../models/state';

@Component({
  selector: 'app-hearder',
  templateUrl: 'hearder.component.html',
  styles: [`
  .site-name{
    position: relative;
    left:80px;
    bottom: 55px;
  }
  .pt-0 {
    padding-top: 0 !important;
  }
  .h-70 {
    height: 70px;
  }
  .pr-100{
    position: absolute;
    right: 120px;
  }
  .pr-title{
    position: absolute;
    right: 130px;
  }
  .focus-btn{
    cursor: pointer;
  }
  .header-welcome{
    border: none;
    background-color: white;
  }
  .menu-bar{
    display: flex;
    margin-right: 100px
  }
  .menu-bar.item{
    margin-right: 20px;
  }
  `
  ]
})
export class HearderComponent implements OnDestroy {
  state!: IState;
  loginUserName: string = '';
  isOpenMenu: boolean = false;

  private stateService = inject(StateService);
  private subscription!: Subscription;

  constructor(private router: Router) {
    this.subscription = this.stateService.getState().subscribe(state => {
      this.state = state;
      this.loginUserName = this.state.name;
    });
  }

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  clickLogin() {
    this.router.navigate(['', 'login']);
  }

  clickLogout() {
    this.stateService.setState(init_state);
    localStorage.clear();
    this.router.navigate(['', 'home']);
  }

  clickSignup() {
    this.router.navigate(['', 'signup']);
  }

  clickHome() {
    this.router.navigate(['', 'home']);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
