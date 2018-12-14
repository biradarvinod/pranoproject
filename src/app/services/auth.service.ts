import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http' ;
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';
import { tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  reguser:any
  // loginuser;
  authToken:any;
  constructor(private http:Http) { }

  uploadFile(img: File) {
    const fd = new FormData();
    fd.append('image', img, img.name);
    return this.http.post('http://localhost:3000/users/uploadImage', fd).pipe(map(res => res.json()));
  }
  uploadFile2(img: File) {
    const fd1 = new FormData();
    fd1.append('image', img, img.name);
    return this.http.post('http://localhost:3000/users/uploadVideo', fd1).pipe(map(res => res.json()));
  }

  trainerRegister(reguser)
  {
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/trainerRegister',JSON.stringify(reguser),{headers:headers})
    .pipe(map(res=>res.json()));
  }

  authenticateUser(reguser)
  {
    let headers=new Headers();
    headers.append('Conent-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate',JSON.stringify(reguser),{headers:headers})
    .pipe(map(res=>res.json()));
  }

 getUserProfile()
  {
   let headers=new Headers();
   this.loadToken();
   this.display();
   headers.append('Authorization',this.authToken);
   headers.append('Content-Type','application/json');
   return this.http.get('http://localhost:3000/users/trainerProfile',{headers:headers})
   .pipe(map(res=>res.json())); 
  }

    storeUserData(token,reguser)
    {
      localStorage.setItem('id_token',token);
      localStorage.setItem('registerData',JSON.stringify(reguser));
      this.authToken=token;
      this.reguser=reguser;
    }
  
   loadToken()
   {
     const token=localStorage.getItem('id_token');
     this.authToken=token;
   }
  
   display()
   {
     const disp=JSON.parse(localStorage.getItem('registerData'));
   }
  
  loggedIn()
  {
    return tokenNotExpired('id_token');
  }
  
    logout()
    {
      this.authToken=null;
      this.reguser=null;
      localStorage.clear();
    }
  
  

}
