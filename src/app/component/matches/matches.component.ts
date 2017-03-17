import { Component } from '@angular/core';
import {MatchService} from '../../match/index';
import {Profile, ProfileService} from '../../profile/index';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
    profileIds: Array<string> = [];

    constructor(private profileService: ProfileService,
                private matchService: MatchService) {

        if (profileService.currentProfile) {
            this.setProfiles(profileService.currentProfile.profileId);
        }

        this.profileService.onProfile()
            .subscribe((profile: Profile) => {
                this.setProfiles(profile.profileId);
            });
    }

    private setProfiles(profileId: string) {
        this.matchService.getListOfProfileIds(profileId)
            .subscribe((list: Array<string>) => {
                this.profileIds = list;
            });
    }


}
