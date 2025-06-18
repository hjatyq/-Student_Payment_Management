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

export class AuthorizationGuardGuard {

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorized=false;
    let authorizedRole:string[] = route.data['roles'] as string[];
    let roles :string[]=this.authService.roles as string[];

    for (let i = 0; i <roles.length ; i++) {
      if (authorizedRole.includes(roles[i])){
        authorized=true;
      }

    }
    return  false

  }

}
