import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardAdminService {

  constructor() { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

  if(this.isAdminLoggedIn())
  {
    return true;
  }
    return false;
}
  isAdminLoggedIn():boolean{
    if(localStorage.getItem('isAdminLoggedIn')=="true")
    {
      return true;
    }
    return false;
  }


  logOut()
  {
    localStorage.removeItem('isAdminLoggedIn');
  }  
}


