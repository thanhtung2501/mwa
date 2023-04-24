import { Component, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { AnimalsService } from '../animals.service';
import {IAnimal} from "../IAnimal";

@Component({
  selector: 'app-animal-creation',
  templateUrl: './animal-creation.component.html',
  styles: [
  ]
})
export class AnimalCreationComponent implements OnInit{

  @Input() animalCreationType: String = ""
  @Input() animalInitData = null
  @Output() performSubmit =  new EventEmitter<any>();

  private animalService = inject(AnimalsService);

  private animalImageName: string = '';
  private animalImageURL: string = '';

  private selectedFile!: File;

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category: ['Dog', Validators.required],
    name: ['Check 3', Validators.required],
    loss_date: ["", Validators.required],
    found_date: [],
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
      user_id: "",
      image_name: this.animalImageName,
      image_url: this.animalImageURL
    };
    this.performSubmit.emit(new_animal);
  }

  ngOnInit() {
    if(this.animalInitData != null){
      this.animalCreationForm.value.age = "123"
      this.animalCreationForm.value.name = "909090 Thao"
    }
  }

  getFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length) {
      this.selectedFile = inputElement.files[0];
    }
  }

  uploadImage() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.selectedFile, this.selectedFile.name);
    this.animalService.uploadAnimalImage(imageFormData).subscribe(response => {
      if (response.success) {
        this.animalImageName = response.data.imageName;
        this.animalImageURL = response.data.imageUrl;
      }
    });
  }
}
