import {Component, inject} from '@angular/core';
import {FormBuilder, NonNullableFormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-missing-animal-creation',
  templateUrl: './missing-animal-creation.component.html',
  styles: [
  ]
})
export class MissingAnimalCreationComponent {

  constructor(private router: Router) {
  }

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category:[''],
    name:[],
    sex:[],
    breed:[],
    weight:[],
    color:[],
    age:[]
  })

  onSubmit() {
    this.router.navigate(['animal-list'])
  }
}
