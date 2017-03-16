import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationInterface, AuthenticationService} from "./authentication/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authentication: AuthenticationService,
              private router: Router) {

    this.authentication
        .onStatus
        .subscribe((status: AuthenticationInterface) => {
          if (!status.isLoggedIn) {
            this.router.navigateByUrl('/login');
          }
        });
  }

  ngOnInit(): void {
    if (!this.authentication.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }
}
