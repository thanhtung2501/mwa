import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { IAnimal } from "../IAnimal";
import { AnimalsService } from "../animals.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-animal-edition',
  templateUrl: '../animal-creation/animal-creation.component.html',
  styles: []
})
export class AnimalEditionComponent implements OnDestroy {

  private animalService = inject(AnimalsService);
  private activaterRouter = inject(ActivatedRoute);
  private notification = inject(ToastrService);
  private subscription!: Subscription;
  private animal_id: string = "";

  animalCreationType: String = "updateAnimal"
  isShowUploadBtn = false

  animalCreationForm = inject(NonNullableFormBuilder).group({
    category: ['Dog', Validators.required],
    name: ['', Validators.required],
    loss_date: [new Date().toISOString().substring(0, 10), Validators.required],
    sex: [''],
    breed: [''],
    weight: ['1', [Validators.required, Validators.min(0.1), Validators.max(100)]],
    color: ['', Validators.required],
    age: ['1', [Validators.required, Validators.min(0.1), Validators.max(50)]],
  })

  constructor(private router: Router) {
    this.animal_id = this.activaterRouter.snapshot.paramMap.get('animal_id') as string;
    this.subscription = this.animalService.getAnimalById(this.animal_id).subscribe((res) => {
      if (res.success == true) {
        let animal = res.data;
        let tempDate = animal.loss_date == null ? new Date() : new Date(animal.loss_date);
        this.animalCreationForm.patchValue({
          category: animal.category,
          name: animal.name,
          loss_date: tempDate.toISOString().substring(0, 10),
          sex: animal.sex,
          breed: animal.breed,
          weight: animal.weight.toString(),
          color: animal.color,
          age: animal.age.toString()
        })

      }
    })

  }

  // ngOnInit() {
  //   this.isMissingAnimal = true;
  //   this.subscription = this.animalService.getAnimalById(this.animal_id).subscribe((res) => {
  //     if (res.success == true) {
  //       let animal = res.data;
  //
  //       let tempDate = animal.loss_date == null ? new Date() : animal.loss_date;
  //       this.animalCreationForm.patchValue({
  //         category: animal.category,
  //         name: animal.name,
  //         loss_date: tempDate.toISOString().substring(0, 10),
  //         sex: animal.sex,
  //         breed: animal.breed,
  //         weight: animal.weight.toString(),
  //         color: animal.color,
  //         age: animal.age.toString()
  //       })
  //
  //     }
  //   })
  // }

  getFileSelected(event: Event) {
  }

  uploadImage() {
  }

  onSubmit() {
    let animalStatus = '';
    this.animalService.getAnimalById(this.animal_id).subscribe(res => {
      if (res.success) {
        animalStatus = res.data.status_animal;
      }
    })

    this.subscription = this.animalService.updateAnimal(this.animal_id, this.animalCreationForm.value as unknown as IAnimal).subscribe(res => {
      this.notification.success("Update animal successfully")
      if (animalStatus === 'MISSING_ANIMAL') {
        this.router.navigate(['', 'animals', 'missing-animal-list']);
      } else if (animalStatus === 'FOUND_ANIMAL') {
        this.router.navigate(['', 'animals', 'found-animal-list']);
      } else {
        this.router.navigate(['', 'animals']);
      }
    })
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
