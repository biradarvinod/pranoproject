import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'admin' },
    children: [{ path: 'adminlogin', component: AdminloginComponent, data: { title: 'Adminlogin' } },
    { path: 'adminregister', component: AdminregisterComponent, data: { title: 'Adminregister' } }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
