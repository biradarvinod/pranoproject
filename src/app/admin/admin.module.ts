import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';






@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFlashMessagesModule
  ],
  declarations: [AdminloginComponent, AdminregisterComponent]
})
export class AdminModule { }
