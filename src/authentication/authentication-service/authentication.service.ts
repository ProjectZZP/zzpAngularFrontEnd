import {AuthenticationInterface, AuthenticationStatus} from '../index';

import {BehaviorSubject} from 'rxjs';



export class AuthenticationService implements AuthenticationInterface {
  private status: BehaviorSubject<AuthenticationInterface>;

  constructor() {
    this.status = new BehaviorSubject<AuthenticationInterface>(new AuthenticationStatus(null, false));
  }

  get isLoggedIn(): boolean {
    return this.status.getValue().isLoggedIn;
  }

  get username(): string {
    return this.status.getValue().username;
  }
}
