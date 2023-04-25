import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnDestroy {
  private userService = inject(UserService);
  private router = inject(Router);
  private notification = inject(ToastrService);
  private subscription!: Subscription;

  signupForm = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    phoneNumber: [''],
    password: ['', Validators.required],
  });

  signup() {
    this.subscription = this.userService.signup(this.signupForm.value as IUser).subscribe(res => {
      if (res.success) {
        this.notification.success('Successfully sign up.');
        this.router.navigate(['', 'login']);
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
