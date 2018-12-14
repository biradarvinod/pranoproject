import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFlashMessagesModule,
    HttpClientModule,
    HttpModule

  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
