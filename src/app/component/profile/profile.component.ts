import {AfterViewInit, Component, Input} from '@angular/core';
import {Profile, ProfileService} from "../../profile/index";

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements AfterViewInit {
  profile: Profile;
  @Input() profileId: string;

  constructor(private profileService: ProfileService) {}

  ngAfterViewInit() : void {
    this.profileService
        .getSingleProfile(this.profileId)
        .subscribe((data: Profile) => {
          this.profile = data;
        });
  }

}
