import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';



@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  orgnization:string;
  username:string;
  email:string;
  mobile:string;
  password:string;

  constructor( private validateService:ValidateService,
    private router:Router,
    private ngFlashMessageService:NgFlashMessageService) { }

  ngOnInit() {
  }
  clientReg(){
    const clireg={
      orgnization:this.orgnization,
      username:this.username,
      email:this.email,
      mobile:this.mobile,
      password:this.password
    }
    if(!this.validateService.validateClientReg(clireg)){
      this.ngFlashMessageService.showFlashMessage({
        messages:["Please Fill the Details!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });

      return false;
    }
    if(!this.validateService.validateEmail(clireg.email)){
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
      this.router.navigate(['/clientsLogin'])
    }
  }
}
