import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; 
// import { userInfo } from 'os';

// import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl ="https://testing.lifeideology.com/api/v1/signup/"
  private _loginUrl ="https://testing.lifeideology.com/api/v1/login /"
  rootUrl: string | undefined;
  
  constructor(private http: HttpClient,
    private router: Router) { }

   // registerUser(user){
  //   // return this.http.post<any>(this._registerUrl, user)
  //   return this.http.post<any>(this._registerUrl, user ) 
    
  // } // registerUser(user){
  //   // return this.http.post<any>(this._registerUrl, user)
  //   return this.http.post<any>(this._registerUrl, user ) 
    
  // }

loginUser(user ){
  return this.http.post<any>(this._loginUrl, user ) 
}

loggedIn()
{
  // console.log(localStorage.getItem('token'), 'lllllllllllllllllllllll')
  return !!localStorage.getItem('Users')
  // return !!localStorage.getItem('token')
}
  logoutUser(){
  localStorage.removeItem('Users')
  // this.router.navigate(['/login'])
}

getToken(){
  return localStorage.getItem('token')
}
// authUser(User: any){
//   let UserArray =[];
//   if(localStorage.getItem('Users')){
//     UserArray = JSON.parse(localStorage.getItem('Users'));    
//   }
//   return UserArray.find( p => p.username === user.username && p.password === user.password );
// } 

userAuthentication(username , password){
  var data = "username" +username+ "&password=" +password+"&grant_type =password";
  var reqHeader =new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
  return this.http.post(this.rootUrl+'/token',data,{headers:reqHeader});
  
}

}