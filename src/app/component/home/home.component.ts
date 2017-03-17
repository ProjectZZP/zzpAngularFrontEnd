import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../authentication/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public authentication: AuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
        if (!this.authentication.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
    }
}
