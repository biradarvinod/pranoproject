import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateLogin(loguser){
    if(loguser.email==undefined || loguser.password==undefined){
      return false;
    }else{
      return true;
    }
  }
  validateEmail(email){
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return re.test(email);
  }

  validateTrainerLogin(trainuser){
    if(trainuser.email==undefined || trainuser.password==undefined){
      return false;
    }else{
      return true;
    }
  }
  validateReg(reguser)
  {
    if(reguser.fname==undefined || reguser.lname==undefined || reguser.dob==undefined ||
      reguser.experience==undefined ||  reguser.address==undefined || reguser.email==undefined || reguser.mobile==undefined ||
      reguser.password==undefined  
      // || reguser.inlineRadioOptions==undefined || reguser.skills==undefined
      )
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  validateAdminReg(adminreg){
    if( adminreg.orgnization==undefined || adminreg.username==undefined || adminreg.email==undefined ||
      adminreg.password==undefined || adminreg.mobile==undefined)
      {
      return false;
    }
    else{
      return true;
    }
  }
  validateClientLogin(clientlog){
    if(clientlog.email==undefined || clientlog.password==undefined){
      return false;
    }else{
      return true;
    }
  }
  validateClientReg(clireg){
    if( clireg.orgnization==undefined || clireg.username==undefined || clireg.email==undefined ||
      clireg.mobile==undefined || clireg.password==undefined)
      {
      return false;
    }
    else{
      return true;
    }
  }


  }



