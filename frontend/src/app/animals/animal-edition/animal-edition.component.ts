import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {IAnimal} from "../IAnimal";
import {AnimalsService} from "../animals.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-animal-edition',
  templateUrl: 'animal-edition.component.html',
  styles: [
  ]
})
export class AnimalEditionComponent implements OnInit, OnDestroy{

  private animalService = inject(AnimalsService);
  private activaterRouter = inject(ActivatedRoute);
  private notification = inject(ToastrService);
  private subscription!: Subscription;
  private animal_id: string = "";
  isMissingAnimal = false

  animalEditionForm = inject(NonNullableFormBuilder).group({
    category: ['Dog', Validators.required],
    name: ['Check 3', Validators.required],
    loss_date:[new Date(), Validators.required],
    found_date:[new Date()],
    sex: ['Female'],
    breed: ['Chuki'],
    weight: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(100)]],
    color: ['Pink', Validators.required],
    age: ['0.1', [Validators.required, Validators.min(0.1), Validators.max(50)]],
  })

  constructor(private router: Router) {
    this.animal_id = this.activaterRouter.snapshot.paramMap.get('animal_id') as string;
  }
  ngOnInit() {
    this.isMissingAnimal = true;
    this.subscription = this.animalService.getAnimalById(this.animal_id).subscribe( (res) => {
      if (res.success == true){
        let animal = res.data;

        let tempDate = animal.loss_date == null ? new Date() : animal.loss_date;
        this.animalEditionForm.patchValue({
          category: animal.category,
          name: animal.name,
          loss_date: tempDate,
          found_date: tempDate,
          sex: animal.sex,
          breed: animal.breed,
          weight: animal.weight.toString(),
          color: animal.color,
          age: animal.age.toString()
        })

      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(){
    this.subscription = this.animalService.updateAnimal(this.animal_id, this.animalEditionForm.value as unknown as IAnimal).subscribe(res => {
      this.notification.success("Update animal successfully")
      this.router.navigate(['','animals'])
    })
  }
}
