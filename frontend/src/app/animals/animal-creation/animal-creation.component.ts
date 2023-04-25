import { Component, EventEmitter, inject, Input, Output, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { AnimalsService } from '../animals.service';
import { IAnimal } from "../IAnimal";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal-creation',
  templateUrl: './animal-creation.component.html',
  styles: [
  ]
})
export class AnimalCreationComponent {

  @Input() animalCreationType: String = ""
  @Output() performSubmit =  new EventEmitter<any>();

  private notification = inject(ToastrService);

  private animalService = inject(AnimalsService);

  private animalImageName: string = '';
  private animalImageURL: string = '';

  private selectedFile!: File;

  isShowUploadBtn = false;

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category: ['Cat', Validators.required],
    name: ['', Validators.required],
    loss_date:[new Date().toISOString().substring(0, 10), Validators.required],
    sex: [''],
    breed: [''],
    weight: ['1', [Validators.min(1), Validators.max(100)]],
    color: [''],
    age: ['1', [Validators.min(1), Validators.max(50)]],
  })

  onSubmit() {
    const tempDate = this.animalCreationForm.value.loss_date == null ? new Date() : new Date(this.animalCreationForm.value.loss_date);
    let new_animal = {
      ...this.animalCreationForm.value,
      loss_date: tempDate,
      found_date: tempDate,
      user_id: "",
      image_name: this.animalImageName,
      image_url: this.animalImageURL
    };
    this.performSubmit.emit(new_animal);
  }

  getFileSelected(event: Event) {

    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length) {

      this.selectedFile = inputElement.files[0];
      this.isShowUploadBtn = true;

    }

  }

  uploadImage() {

    const imageFormData = new FormData();

    imageFormData.append('image', this.selectedFile, this.selectedFile.name);

    this.animalService.uploadAnimalImage(imageFormData).subscribe(response => {

      if (response.success) {

        this.notification.success('Upload image successfully.');

        this.animalImageName = response.data.imageName;

        this.animalImageURL = response.data.imageUrl;
        this.isShowUploadBtn = false;

      }

    });

  }
}
