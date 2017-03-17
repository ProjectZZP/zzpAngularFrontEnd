import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../authentication/index';
import {ProfileService} from "../../profile/index";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    profileIds: Array<string> = [];

    constructor(public authentication: AuthenticationService,
                private profileService: ProfileService,
                private router: Router) {
        this.profileService.getAllMyProfileIds().subscribe((list: Array<string>)=>this.profileIds=list);
    }

    ngOnInit(): void {
        if (!this.authentication.isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
    }

    setProfile(profileId: string) {
        this.profileService.setSingleProfile(profileId).subscribe(() => {
            this.router.navigateByUrl('matches');
        });
    }
}
