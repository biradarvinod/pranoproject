import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { ClientsModule } from './clients/clients.module';
import { TrainerModule } from './trainer/trainer.module';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'clients', loadChildren: './clients/clients.module#ClientsModule' },
  { path: 'trainer', loadChildren: './trainer/trainer.module#TrainerModule' }
]

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    ClientsModule,
    TrainerModule,
    RouterModule.forRoot(approutes)
    ,],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
