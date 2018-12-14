import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private ngFlashMessageService:NgFlashMessageService,
              private authService:AuthService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }
reguser:Object;
  ngOnInit() {
    this.authService.getUserProfile().subscribe(profile => {
      this.reguser = profile.reguser
    },
      err => {
        console.log(err);
        return false;
      });
  }

  onTrainerRegister() {
   
  }

}
