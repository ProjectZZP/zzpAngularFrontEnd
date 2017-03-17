import { Component } from '@angular/core';
import {MatchService} from '../../match/index';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
    profileIds: Array<string> = [];

    constructor(private matchService: MatchService) {

        this.matchService.getListOfProfileIds('')
            .subscribe((list: Array<string>) => {
                this.profileIds = list;
            });
    }
}
