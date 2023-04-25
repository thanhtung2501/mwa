import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IAnimal} from "../IAnimal";
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {AnimalsService} from "../animals.service";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import { Modal } from 'flowbite'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adopt-animal-modal',
  templateUrl: './adopt-animal-modal.component.html',
  styles: [`
    .text-ic {
      text-align: center;
      font-style: italic;
    }
  `]
})
export class AdoptAnimalModalComponent implements OnInit, OnDestroy{

  private animalService = inject(AnimalsService)
  private userService = inject(UserService)

  private notification = inject(ToastrService)

  private subscription!: Subscription

  @Input() modalId: String = ""
  @Input() animal!: IAnimal
  private buttonOpenModal?: HTMLElement
  private buttonCloseModal?: HTMLElement
  private buttonDeclineModal?: HTMLElement
  private modalElement?: HTMLElement

  private modal?: Modal

  onAcceptFunc(){
    const currentUser = JSON.parse(localStorage.getItem('APP_STATE') || '');
    this.subscription = this.userService.getUserById(currentUser._id).subscribe(res => {
      if (res.success) {
        let animalAdopt = this.animal;
        let tempDate = this.animalAdoptForm.value.adopt_date == null ? new Date() : new Date(this.animalAdoptForm.value.adopt_date);
        animalAdopt.adopt_date = tempDate;
        animalAdopt.adopted_user = res.data;
        animalAdopt.adopted_user.password = "";
        this.subscription = this.animalService.addAdoptAnimals(animalAdopt).subscribe(resA => {
          if (resA.success){
            this.notification.success("Adopt animal successfully.")
            this.modal!.hide()
          }
        })
      }
    })
  }

  animalAdoptForm = inject(NonNullableFormBuilder).group({
    adopt_date: [new Date().toISOString().substring(0, 10), Validators.required],
  })

  ngOnInit() {
    this.buttonOpenModal = document.querySelector('#openModalBtnId')!;
    this.buttonCloseModal = document.querySelector('#closeModalBtnId')!;
    this.buttonDeclineModal = document.querySelector('#declineModalBtnId')!;
    this.modalElement = document.querySelector('#animalModalId')!;

    this.modal = new Modal(this.modalElement);
    this.buttonOpenModal.addEventListener('click', () => this.modal!.show());
    this.buttonCloseModal.addEventListener('click', () => this.modal!.hide());
    this.buttonDeclineModal.addEventListener('click', () => this.modal!.hide());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
