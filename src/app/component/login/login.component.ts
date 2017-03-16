import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication-service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authentication: AuthenticationService) {}
}
