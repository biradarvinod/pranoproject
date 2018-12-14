import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientLoginComponent } from './components/client-login/client-login.component';
import { ClientRegisterComponent } from './components/client-register/client-register.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';


@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    NgFlashMessagesModule
  ],
  declarations: [ClientLoginComponent, ClientRegisterComponent]
})
export class ClientsModule { }
