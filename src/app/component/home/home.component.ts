import { Component } from '@angular/core';
import {AuthenticationService} from '../../authentication/index';
import {ProfileService} from "../../profile/profile-service/profile.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    profileIds: Array<string> = [];

    constructor(public authentication: AuthenticationService, private profileService: ProfileService) {
        this.profileService.getAllMyProfileIds().subscribe((list: Array<string>)=>this.profileIds=list);
    }
}
