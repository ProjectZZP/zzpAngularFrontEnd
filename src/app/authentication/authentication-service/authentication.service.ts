import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthenticationInterface, AuthenticationStatus} from '../index';


@Injectable()
export class AuthenticationService implements AuthenticationInterface {
  private status: BehaviorSubject<AuthenticationInterface>;

  constructor(private http: Http) {
    this.status = new BehaviorSubject<AuthenticationInterface>(new AuthenticationStatus(null, false));
  }

  public login(username: string) {
    // for now:
    this.status.next(new AuthenticationStatus(username, true));
  }

  get onStatus(): Observable<AuthenticationInterface> {
    return this.status.asObservable();
  }

  get isLoggedIn(): boolean {
    return this.status.getValue().isLoggedIn;
  }

  get username(): string {
    return this.status.getValue().username;
  }
}