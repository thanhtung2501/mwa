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
    return this.http.post<{ success: true, data: string }>(environment.HTTP_SERVER + '/users/login', data);
  }

  signup(user: IUser) {
    return this.http.post<{ success: true, data: IUser }>(environment.HTTP_SERVER + '/users/signup', user);
  }

  getUserById(user_id: String) {
    return this.http.get<{ success: true, data: IUser }>(environment.HTTP_SERVER + '/users/' + user_id);
  }
}
