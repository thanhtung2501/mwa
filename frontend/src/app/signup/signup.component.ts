import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent {
  private userService = inject(UserService);
  private router = inject(Router);
  private notification = inject(ToastrService);

  form = inject(FormBuilder).nonNullable.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
  });

  signup() {
    this.userService.signup(this.form.value as IUser).subscribe(res => {
      if (res.success) {
        this.notification.success('Successfully sign up.');
        this.router.navigate(['', 'login']);
      }
    })
  }

}
