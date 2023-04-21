import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hearder',
  templateUrl: 'hearder.component.html',
  styles: [
  ]
})
export class HearderComponent {
  constructor(private router: Router) {
  }
  clickLogin(){
    this.router.navigate(['login'])
  }

  clickSignup(){
    this.router.navigate(['signup'])
  }
}
