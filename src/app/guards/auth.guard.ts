import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
@Injectable(
  {  providedIn: 'root'  // ✅ Cette ligne est cruciale !
  }
)

export class AuthGuard{

  constructor(private authService : AuthentificationService,private router :Router) {
  }

   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):MaybeAsync<GuardResult>{
     if(this.authService.authenticated==true){
       return true
     }
     else {
       this.router.navigateByUrl("/login")
       return false;

     }
   }
}

