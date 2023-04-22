import {Component, inject} from '@angular/core';
import {NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-found-animal-creation',
  templateUrl: '../missing-animal-creation/missing-animal-creation.component.html',
  styles: [
  ]
})
export class FoundAnimalCreationComponent {
  constructor(private router: Router) {
  }
  animalCreationForm = inject(NonNullableFormBuilder).group({})

  onSubmit(){
    this.router.navigate(['animal-list'])
  }
}
