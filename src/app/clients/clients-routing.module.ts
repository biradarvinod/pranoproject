import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';




const routes: Routes = [
  {
    path: '',
    data: { title: 'clients' },
    children: [
      { path: 'clientsRegister', component: ClientRegisterComponent, data: { title: 'clientRegister' } },
      {
        path: 'clientsLogin', component: ClientLoginComponent, data: { title: 'ClientrLogin' }
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class ClientsRoutingModule { }
