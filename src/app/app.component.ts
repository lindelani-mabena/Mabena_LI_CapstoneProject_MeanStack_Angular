import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationGuardAdminService } from './services/authentication-guard-admin.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mabena-LI-CapStoneProject-FrontEnd';

  constructor(private _authentication: AuthenticationGuardService, private _authenticationAdmin:AuthenticationGuardAdminService, private _Router:Router)
  {
    
  }
  loginStatus()
  {
    if(this._authentication.isLoggedIn())
    {
      return true;
    }
    return false;
  }

  logout()
  {
    this._authentication.logOut();
    this._authenticationAdmin.logOut();
    localStorage.clear();
    alert("You are logged out successfully");
    this._Router.navigate(['/login'])
  }
}
