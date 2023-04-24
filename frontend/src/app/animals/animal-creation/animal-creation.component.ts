import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";

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
    category: ['Dog', Validators.required],
    name: ['Check 3', Validators.required],
    loss_date:["", Validators.required],
    found_date:[],
    sex: ['Female'],
    breed: ['Chuki'],
    weight: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(100)]],
    color: ['Pink', Validators.required],
    age: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(50)]],
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
