import { Component, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AnimalsService } from "../animals.service";
import { IAnimal } from "../IAnimal";
import { Parser } from "@angular/compiler";

@Component({
  selector: 'app-missing-animal-creation',
  templateUrl: './missing-animal-creation.component.html',
  styles: [
  ]
})
export class MissingAnimalCreationComponent {
  private animalService = inject(AnimalsService);

  constructor(private router: Router) {
  }

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category: ['Dog', Validators.required],
    name: ['Check 3', Validators.required],
    sex: ['Female'],
    breed: ['Chuki'],
    weight: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(100)]],
    color: ['Pink', Validators.required],
    age: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(50)]],
  })

  onSubmit() {
    let new_animal = {
      ...this.animalCreationForm.value,
      user_id: ""
    }
    console.log(new_animal)
    this.animalService.addMissingAnimals(new_animal as unknown as IAnimal).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['', 'animals', 'animal-list'])
      }
    })
  }
}
