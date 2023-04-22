import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {MissingAnimalCreationComponent} from "./missing-animal-creation/missing-animal-creation.component";
import {FoundAnimalCreationComponent} from "./found-animal-creation/found-animal-creation.component";
import {AnimalListComponent} from "./animal-list/animal-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent, title: "MWA-Group8"},
  {path: 'login', component: LoginComponent, title: "Log in"},
  {path: 'signup', component: SignupComponent, title: "Sign up"},
  {path: 'create-missing-animal', component: MissingAnimalCreationComponent, title: "Create missing animal"},
  {path: 'create-found-animal', component: FoundAnimalCreationComponent, title: "Create found animal"},
  {path: 'animal-list', component: AnimalListComponent, title: "Animal list"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
