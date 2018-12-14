import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
email:string;
password:string;
  constructor(private validateService:ValidateService,
    private ngFlashMessageService:NgFlashMessageService ) { }

  ngOnInit() {
  }
  onLogin(){
    const loguser={
      email:this.email,
      password:this.password

    }
  if(!this.validateService.validateLogin(loguser)){
    this.ngFlashMessageService.showFlashMessage({
      messages:["Please Fill the Details!"],
      dismissible:true,
      timeout:4000,
      type:'danger'
    });

    return false;
  }
  if(!this.validateService.validateEmail(loguser.email)){
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
