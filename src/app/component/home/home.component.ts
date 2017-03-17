import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(public authentication: AuthenticationService) {
    }
}
