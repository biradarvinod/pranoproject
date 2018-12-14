import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerRegisterComponent } from './trainer-register/trainer-register.component';
import { TrainerLoginComponent } from './trainer-login/trainer-login.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';


const routes: Routes = [
  {
    path: '',
    data: { title: 'trainers' },
    children: [{ path: 'trainerRegister', component: TrainerRegisterComponent, data: { title: 'trainerRegister' } },
    { path: 'trainerLogin', component: TrainerLoginComponent, data: { title: 'trainerLogin' } },
    { path: 'trainerProfile', component: TrainerProfileComponent, data: { title: 'trainerProfile' } }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
