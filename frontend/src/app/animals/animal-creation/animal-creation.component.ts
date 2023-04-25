import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-animal-creation',
  templateUrl: './animal-creation.component.html',
  styles: [
  ]
})
export class AnimalCreationComponent {

  @Input() animalCreationType: String = ""
  @Output() performSubmit =  new EventEmitter<any>();

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category: ['Cat', Validators.required],
    name: ['Theo', Validators.required],
    loss_date:[new Date(), Validators.required],
    found_date:[new Date()],
    sex: [''],
    breed: ['Theo1'],
    weight: ['1', [Validators.required, Validators.min(0.1), Validators.max(100)]],
    color: ['pink', Validators.required],
    age: ['1', [Validators.required, Validators.min(0.1), Validators.max(50)]],
  })

  onSubmit() {
    let new_animal = {
      ...this.animalCreationForm.value,
      found_date: this.animalCreationForm.value.loss_date,
      user_id: ""
    }
    this.performSubmit.emit(new_animal);
  }
}
