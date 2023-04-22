import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Homepage" },
  { path: 'login', component: LoginComponent, title: "Log in" },
  { path: 'signup', component: SignupComponent, title: "Sign up" },
  {path: 'animals', loadChildren: () => import('./animals/animals.module').then(module => module.AnimalsModule)},
  { path: '**', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
