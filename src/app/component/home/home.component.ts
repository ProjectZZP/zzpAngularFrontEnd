import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/index';
import {ProfileService} from "../../profile/profile-service/profile.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    profileIds: Array<string> = [];

    constructor(public authentication: AuthenticationService, private profileService: ProfileService, private router: Router) {
        this.profileService.getAllMyProfileIds().subscribe((list: Array<string>)=>this.profileIds=list);
    }

    setProfile(profileId: string) {
        this.profileService.setSingleProfile(profileId).subscribe(() => {
            this.router.navigateByUrl('matches');
        });
    }
}
