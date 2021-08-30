import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { HttpConnectionService } from '../http-connection.service';
import { LoginModelReturn } from '../models/login-model-return';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersList: Array<User> = [];
  userLogin: UserLogin = new UserLogin();
  loginModel :LoginModelReturn = new LoginModelReturn();

  constructor(private _HttpConnectionService: HttpConnectionService, private _Router:Router) { }

  ngOnInit(): void {
  }


  Login()
  {
    
    this._HttpConnectionService.Login(this.userLogin).subscribe((result)=>
    {
      this.loginModel = result;
      console.log(this.userLogin.username);
      console.log(this.userLogin.password);
      console.log(this.loginModel.isLoggedIn);
      console.log(this.loginModel.type);
      if((this.loginModel.isLoggedIn) ==true)
      {
        alert("Successfull login");

        if(this.loginModel.type=="admin")
        {
          localStorage.setItem('isAdminLoggedIn',"true")
          this._Router.navigate(['/admin-page']);
        }
        else{
          localStorage.setItem('isLoggedIn',"true")
          this._Router.navigate(['/products']);
        }        
      }
      else{
        alert("Login failed, please try again")
      }
    },(error)=>
    {

    })
  }
  
}

