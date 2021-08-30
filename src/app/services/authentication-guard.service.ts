import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService {

  constructor() {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

    if(this.isLoggedIn())
    {
      return true;
    }
      return false;
  }

  


  isLoggedIn(): boolean {
    if(localStorage.getItem('isLoggedIn')=="true")
    {
      return true;
    }
    
    return false;
    }
    
    logOut()
    {
      localStorage.removeItem('isLoggedIn');
    
    }  
}

