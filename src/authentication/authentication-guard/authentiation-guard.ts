import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthenticationService} from '../index';


@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private authentication: AuthenticationService/*, private router: Router*/) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        if (this.authentication.isLoggedIn) {
            return true;
        }

        // Navigate to login page
        //this.router.navigate(['/login'], { queryParams: { returnUrl: url }});
    }
}
