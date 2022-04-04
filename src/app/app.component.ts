import { Component } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import{ GlobalConstants } from './auth/auth.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cwh-todo-list';
  // toDisplay = true;

  title ='app';
  

  constructor( public _authService:AuthService
      // private _authService:AuthService
      
      
      ){console.log("dddddddddddddddddddddddd", _authService)}
      
      // console.log("dddddddddddddddddddddddd", _authService)

  // toggleData() {
  //   this.toDisplay = !this.toDisplay;
  // }

  // constructor( private http:HttpClient,
  //   // private _authService:AuthService
    
    
  //   ){}
  //   onSubmit(data)
  //   {
  //     this.http.post(GlobalConstants.apiURL,data.value)
  //     .subscribe((result)=>{
  //       console.warn("result" ,result)
  //     })
  //   console.warn(data);
  //   }
  //   loggedin(){
  //     return localStorage.removeItem('token');
  //   }
  //   m(){
  //     return localStorage.getItem('token');
  //   }

  }

