import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationInterface, AuthenticationService} from '../../authentication/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: FormControl;
    
    constructor(private authentication: AuthenticationService,
                private router: Router) {
        this.username = new FormControl();
    }

    login(): boolean {
        this.authentication
            .login(this.username.value)
            .subscribe((status: AuthenticationInterface) => {
                if (status.isLoggedIn) {
                    this.router.navigateByUrl('/');
                }
            });
        return false;
    }
}
