import { Component, inject, OnDestroy } from '@angular/core';
import { StateService } from '../services/state.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../models/user';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnDestroy {
  private userService = inject(UserService);
  private router = inject(Router);
  private notification = inject(ToastrService);

  private stateService = inject(StateService);
  private subscription!: Subscription;

  form = inject(FormBuilder).nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor() {
    this.subscription = this.stateService.getState().subscribe(state => {
      if (state._id) {
        this.router.navigate(['', 'animals']);
      }
    });
  }

  login() {
    this.userService.login(this.form.value as IUser).subscribe(res => {
      if (res.success) {
        this.notification.success('Successfully logged in.');
        const encryptedToken = res.data;
        const decodedToken = jwt_decode(encryptedToken) as IUser;

        const state = {
          ...decodedToken,
          jwt: encryptedToken
        };

        this.stateService.setState(state);
        localStorage.setItem('APP_STATE', JSON.stringify(state));
        this.router.navigate(['', 'animals']);
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
