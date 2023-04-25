import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { IAnimal } from "./IAnimal";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private http = inject(HttpClient);

  getAllAnimals() {
    console.log("call getAllAnimals")
    return this.http.get<{ success: boolean, data: IAnimal[] }>(environment.HTTP_SERVER + '/animals');
  }

  getMissingAnimals() {
    console.log("call getMissingAnimals")
    return this.http.get<{ success: boolean, data: IAnimal[] }>(environment.HTTP_SERVER + '/animals?action=listMissingAnimals');
  }

  addMissingAnimals(animal: IAnimal) {
    return this.http.post<{ success: boolean, data: IAnimal }>(environment.HTTP_SERVER + '/animals?action=addMissingAnimal', animal);
  }

  getFoundAnimals() {
    return this.http.get<{ success: boolean, data: IAnimal[] }>(environment.HTTP_SERVER + '/animals?action=listFoundAnimals');
  }

  addFoundAnimals(animal: IAnimal) {
    return this.http.post<{ success: boolean, data: IAnimal }>(environment.HTTP_SERVER + '/animals?action=addFoundAnimal', animal);
  }

  getAdoptAnimals() {
    return this.http.get<{ success: boolean, data: IAnimal[] }>(environment.HTTP_SERVER + '/animals?action=listAdoptAnimals');
  }

  addAdoptAnimals(animal: IAnimal) {
    return this.http.post<{ success: boolean, data: IAnimal }>(environment.HTTP_SERVER + '/animals?action=addAdoptAnimal', animal);
  }

  removeAnimal(animal_id: string) {
    return this.http.delete<{ success: boolean, data: any }>(environment.HTTP_SERVER + '/animals/' + animal_id)
  }

  updateAnimal(animal_id: String , animal: IAnimal) {
    return this.http.patch(environment.HTTP_SERVER + '/animals/' + animal_id, animal);
  }

  getAnimalById(animal_id: string){
    return this.http.get<{success: true, data: IAnimal}>(environment.HTTP_SERVER + '/animals/' + animal_id);

  }}



