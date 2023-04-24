import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCreationComponent } from "./animal-creation/animal-creation.component";
import { FoundAnimalCreationComponent } from "./found-animal-creation/found-animal-creation.component";
import { AnimalListComponent } from "./animal-list/animal-list.component";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateAnimalComponent } from './updateAnimal.component';
import { AnimalComponent } from './animal.component';
import { MissingAnimalCreationComponent } from './missing-animal-creation/missing-animal-creation.component';
import { MissingAnimalListComponent } from './missing-animal-list/missing-animal-list.component';
import { FoundAnimalListComponent } from './found-animal-list/found-animal-list.component';
import { AvailableAnimalListComponent } from './available-animal-list/available-animal-list.component';


@NgModule({
  declarations: [
    AnimalCreationComponent,
    FoundAnimalCreationComponent,
    AnimalListComponent,
    AnimalItemComponent,
    UpdateAnimalComponent,
    AnimalComponent,
    MissingAnimalCreationComponent,
    MissingAnimalListComponent,
    FoundAnimalListComponent,
    AvailableAnimalListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AvailableAnimalListComponent, title: "Animal list" },
      { path: 'create-missing-animal', component: MissingAnimalCreationComponent, title: "Create missing animal" },
      { path: 'create-found-animal', component: FoundAnimalCreationComponent, title: "Create found animal" },
      { path: 'missing-animal-list', component: MissingAnimalListComponent, title: "Missing animal list" },
      { path: 'found-animal-list', component: FoundAnimalListComponent, title: "Found animal list" },
      { path: 'update/:animal_id', component: UpdateAnimalComponent, title: "Update animal" },
      { path: ':animal_id', component: AnimalComponent, title: "Animal details" }
    ])
  ]
})
export class AnimalsModule { }
