import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
 orgnization:string;
 username:string;
 email:string;
 password:string;
 mobile:string;


  constructor( private validateService:ValidateService,
    private router:Router,
    private ngFlashMessageService:NgFlashMessageService) { }

  ngOnInit() {
  }


  onAdminReg(){
    const adminreg={
      orgnization:this.orgnization,
      username:this.username,
      email: this.email,
      password:this.password,
      mobile:this.password
    }
    if(!this.validateService.validateAdminReg(adminreg)){
      this.ngFlashMessageService.showFlashMessage({
        messages:["Please Fill the Details!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });

      return false;
    }
    if(!this.validateService.validateEmail(adminreg.email)){
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
        messages:["Register Successfull"],
        dismissible:true,
        timeout:4000,
        type:'success'
      });
      this.router.navigate(['/adminlogin'])
    }
  }
  }

