import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private _HttpConnetionService:HttpConnectionService, private _Router:Router) { }

  ngOnInit(): void {
  }
  
  register()
  {

    this._HttpConnetionService.RegisterUser(this.user)
    {
      
    }
   /*  if(this.user.password== this.user.confirmPassword)
    {
    this._HttpConnetionService.RegisterUser(this.user).subscribe((result)=>
    {
      console.log("Registered user is "+ result);
      alert("You have successfully been registered.");
      this._Router.navigate(['/login']);
    },(error)=>
    {
      console.log("Error is"+ error);
      alert("Registration failed, please try again.");
    
    })
  }
  else
  {
    alert("Password is not equal to confirm password, please try again.");
  }

  } */
}
}
