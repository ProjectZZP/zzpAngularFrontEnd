import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/index';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    constructor(public authentication: AuthenticationService) {
    }

    logout(): boolean {
        this.authentication.logout();
        return false;
    }
}
