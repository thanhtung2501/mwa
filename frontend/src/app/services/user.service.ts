import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  login(data: IUser) {
    return this.http.post(environment.HTTP_SERVER + '/users/login', data);
  }

  signup(user: IUser) {
    return this.http.post(environment.HTTP_SERVER + '/users/signup', user);
  }
}
