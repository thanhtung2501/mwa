import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {IAnimal} from "./IAnimal";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private http = inject(HttpClient);

  getMissingAnimals() {
    console.log("call getMissingAnimals")
    return this.http.get<IAnimal[]>(environment.HTTP_SERVER + '/animals?action=listMissingAnimals');
  }

  addMissingAnimals(animal: IAnimal){
    return this.http.post<{data: IAnimal}>(environment.HTTP_SERVER + '/animals?action=addMissingAnimal', animal);
  }
  getFoundAnimals() {
    return this.http.get<IAnimal[]>(environment.HTTP_SERVER + '/animals?action=listFoundAnimalS');
  }

  addFoundAnimals(animal: IAnimal){
    return this.http.post<{data: IAnimal}>(environment.HTTP_SERVER + '/animals?action=addFoundAnimal', animal);
  }
  getAdoptAnimals() {
    return this.http.get<IAnimal[]>(environment.HTTP_SERVER + '/animals?action=listAdoptAnimals');
  }

  addAdoptAnimals(animal: IAnimal){
    return this.http.post<{data: IAnimal}>(environment.HTTP_SERVER + '/animals?action=addAdoptAnimal', animal);
  }

  removeAnimal(animal_id: string){
    return this.http.delete<{data: any}>(environment.HTTP_SERVER + '/animals/' + animal_id)
  }

  updateAnimal(animal_id: string, animal: IAnimal) {
    return this.http.patch(environment.HTTP_SERVER + '/animals/' + animal_id, animal);
  }
}



