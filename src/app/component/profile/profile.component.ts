import {Component} from '@angular/core';
import {Profile} from "../../profile/profile/profile";

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

  constructor(private profile: Profile) {}
}
