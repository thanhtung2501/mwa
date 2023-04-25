import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.css']
})
export class HomeComponent {
  imageMissing: string = '../assets/dog.jpeg';
  imageFound: string = '../assets/cat.jpeg';
  imageAdopt: string = '../assets/Two-White-Puppies.jpg';

}
