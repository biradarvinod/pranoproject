import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerRegisterComponent } from './trainer-register/trainer-register.component';
import { TrainerLoginComponent } from './trainer-login/trainer-login.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';

@NgModule({
  imports: [
    CommonModule,
    TrainerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    NgFlashMessagesModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [TrainerRegisterComponent, TrainerLoginComponent, TrainerProfileComponent],
  providers:[AuthService,ValidateService],
  exports:[TrainerLoginComponent]
})
export class TrainerModule { }
