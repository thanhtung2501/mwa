import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
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
export class AdoptAnimalModalComponent implements OnDestroy, AfterViewInit{

  private animalService = inject(AnimalsService)
  private userService = inject(UserService)

  private notification = inject(ToastrService)

  private subscription!: Subscription

  @Input() animal!: IAnimal
  private buttonOpenModal?: HTMLElement
  private buttonCloseModal?: HTMLElement
  private buttonDeclineModal?: HTMLElement
  private modalElement?: HTMLElement

  private modal?: Modal

  @Input() openModalBtnId: string = ""
  @Input() modalId: string = ""
  @Input() declineModalBtnId: string = ""
  @Input() closeModalBtnId: string = ""
  disableAdoptBtn = false


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

  constructor() {

  }

  ngAfterViewInit() {
    this.buttonOpenModal = document.querySelector(`#${this.openModalBtnId}`)!;
    this.buttonCloseModal = document.querySelector(`#${this.closeModalBtnId}`)!;
    this.buttonDeclineModal = document.querySelector(`#${this.declineModalBtnId}`)!;
    this.modalElement = document.querySelector(`#${this.modalId}`)!;

    this.modal = new Modal(this.modalElement);
    this.buttonOpenModal.addEventListener('click', () => this.modal!.show());
    this.buttonCloseModal.addEventListener('click', () => this.modal!.hide());
    this.buttonDeclineModal.addEventListener('click', () => this.modal!.hide());

    this.disableAdoptBtn = this.animal.status_animal === "ADOPTED_ANIMAL";
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

