import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/index';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    constructor(private authentication: AuthenticationService) {
    }

    isLoggedIn(): boolean {
        return this.authentication.isLoggedIn;
    }

    logout(): boolean {
        this.authentication.logout();
        return false;
    }
}
