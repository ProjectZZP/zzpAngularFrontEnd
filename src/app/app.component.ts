import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from "./authentication/authentication-service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authentication: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (!this.authentication.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }
}
