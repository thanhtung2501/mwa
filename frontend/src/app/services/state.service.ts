import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IState } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state = new BehaviorSubject<IState>(init_state);

  getState() {
    return this._state.asObservable();
  }

  setState(new_state: IState) {
    this._state.next(new_state);
    return this._state.value;
  }
}

export const init_state = {
  _id: "",
  name: "Guest",
  email: "",
  jwt: ""
}
