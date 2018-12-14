import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-trainer-register',
  templateUrl: './trainer-register.component.html',
  styleUrls: ['./trainer-register.component.css']
})
export class TrainerRegisterComponent implements OnInit {

  constructor(
              private ngFlashMessageService:NgFlashMessageService,
              private authService:AuthService,
              private validateService:ValidateService,
              private router:Router) { }


  ngOnInit() {
    // this.skills = ['Java', 'HTMl', 'Angular', 'Bootstrap'];
  }

fname;
lname;
dob;
address;
// resume=File
// demovideo=File
email;
mobile;
password;
// inlineRadioOptions;
// skills;
experience;
iuploadname: String;
  ioriginalname: String;
  image = null;
  demovideo=null;
  videoname:String;
  videoorgname:String;

// selected_checkbox = {};
//   selected_chart(event) {
//     this.selected_checkbox[event.target.name] = event.target.checked;
//   }
  onTrainerRegister() {
    const reguser={
      fname:this.fname,
      lname:this.lname,
      dob:this.dob,
      address:this.address,
      // resume:this.resume,
      // demovideo:this.demovideo,
      email:this.email,
      mobile:this.mobile,
      password:this.password,
      // inlineRadioOptions:this.inlineRadioOptions,
      // skills:this.selected_checkbox,
      experience:this.experience, 
      iuploadname: this.iuploadname,
      ioriginalname: this.ioriginalname,
      videoname:this.videoname,
      videoorgname:this.videoorgname
    }

    if(!this.validateService.validateReg(reguser))
    {
      this.ngFlashMessageService.showFlashMessage({
        messages:["Please Fill the Details!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });
      return false;
    }
    else
    if(!this.validateService.validateEmail(reguser.email)){
      this.ngFlashMessageService.showFlashMessage({
        messages:["Fill the Valid Email-Id!"],
        dismissible:true,
        timeout:4000,
        type:'danger'
      });
       return false;
    }else
    {
      this.authService.trainerRegister(reguser).subscribe(data=>
        {
          if(data.success)
          {
            this.ngFlashMessageService.showFlashMessage({
              messages:["Register Successfully"],
              dismissible:true,
              timeout:3000,
              type:'success'
            });
            this.router.navigate(['/trainerLogin']);
            localStorage.setItem('registerData',JSON.stringify(reguser));
            console.log(JSON.parse(localStorage.getItem('registerData')));
          }
          else{
            this.ngFlashMessageService.showFlashMessage({
              messages:["SomeThing Went Wrong"],
              dismissible:true,
              timeout:3000,
              type:'danger'
            });
            this.router.navigate(['/trainerRegister']);
          }
        });
      }

  }


  fileSelect(event) {
    const image = event.target.files[0];
    // //console.log(image.name);
    this.authService.uploadFile(image).subscribe((res) => {
      // //console.log(res.filePath);
      // //console.log(res.originalname);
      this.iuploadname ='resumes/resume/'+res.filePath;
      this.ioriginalname = image.name;
    },
      (err) => {
        //console.log(err);
        throw new Error(err);
      });
  }
  fileSelect2(event) {
    const demovideo = event.target.files[0];
    // //console.log(image.name);
    this.authService.uploadFile(demovideo).subscribe((res) => {
      // //console.log(res.filePath);
      // //console.log(res.originalname);
      this.videoname ='demovideos/videos/'+res.filePath;
      this.videoorgname = demovideo.name;
    },
      (err) => {
        //console.log(err);
        throw new Error(err);
      });
  }
}
