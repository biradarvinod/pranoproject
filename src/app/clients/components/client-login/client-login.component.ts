import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';



@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private validateService:ValidateService,
    private ngFlashMessageService:NgFlashMessageService) { }

  ngOnInit() {
  }
  clientLogIn(){

    const clientlog={
      email:this.email,
      password:this.password
    }
    if(!this.validateService.validateClientLogin(clientlog)){
      this.ngFlashMessageService.showFlashMessage({
        messages:["Please Fill the Details!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });

      return false;
    }
     if(!this.validateService.validateEmail(clientlog.email)){
      this.ngFlashMessageService.showFlashMessage({
        messages:["Please Fill the Valid Email-Id!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });
       return false;
    }
    else{
      this.ngFlashMessageService.showFlashMessage({
        messages:[" Login Successfull"],
        dismissible:true,
        timeout:4000,
        type:'success'
      });

    }
    }

  }

