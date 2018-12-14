import { Component, OnInit } from '@angular/core';

import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';


@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {

  constructor(
              private ngFlashMessageService:NgFlashMessageService,
              private authService:AuthService,
              private validateService:ValidateService,
              private router:Router) { }

  ngOnInit() {
    // localStorage.getItem('registerData');
  }
email;
password;;
  onTrainerLogin()
  {
      const reguser=
      {
        email:this.email,
        password:this.password
      }
     
      this.authService.authenticateUser(reguser).subscribe(data=>
        {
          if(data.success)
          {
            this.authService.storeUserData(data.token,data.reguser);
            this.ngFlashMessageService.showFlashMessage ({
              messages: ["You are now Logged In"], 
             dismissible: true, 
             timeout: 3000,
             type: 'success'
           });
           this.router.navigate(['/trainerProfile']);
  
          }
          else
          {
            this.ngFlashMessageService.showFlashMessage ({
              messages: [data.msg], 
             dismissible: true, 
             timeout: 3000,
             type: 'danger'
           });
           this.router.navigate(['/trainerLogin'])
          }
        });
  




    // const reg= JSON.parse(localStorage.getItem('registerData'));
    // const trainuser={
    //   email:this.email,
    //   password:this.password
    // }
  //   if(!this.validateService.validateTrainerLogin(trainuser))
  //   {
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages:["Please Fill the Details!"],
  //       dismissible:true,
  //       timeout:3000,
  //       type:'danger'
  //     });
  //     this.router.navigate(['/trainerLogin'])
  //     return false;
  //   }else
  //   if(!this.validateService.validateEmail(trainuser.email))
  //   {
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages:["Please Fill The Valid E-Mail-ID"],
  //       dismissible:true,
  //       timeout:3000,
  //       type:'danger'
  //     });
  //     this.router.navigate(['/trainerLogin'])
  //       return false;
  //   }else
  //   if(reg.email!=this.email || reg.password!=this.password){
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages:["Invalid Username and Password"],
  //       dismissible:true,
  //       timeout:3000,
  //       type:'danger'
  //     });
  //     this.router.navigate(['/trainerLogin'])
  //     return false;
  //   }
  //   else{
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages:["Login Successful"],
  //       dismissible:true,
  //       timeout:3000,
  //       type:'success'
  //     });

  //   }

  }

}
