import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthenticationInterface, AuthenticationStatus} from '../index';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthenticationService implements AuthenticationInterface {
  private status: BehaviorSubject<AuthenticationInterface>;

  constructor(private http: Http) {
    this.status = new BehaviorSubject<AuthenticationInterface>(new AuthenticationStatus(null, null, false));
  }

  public login(username: string): Observable<AuthenticationInterface> {
    return this.http
        .post(environment.loginUrl, {userId:username}, this.createOptions())
        .map((res: Response) => res.json())
        .map((json: any) => new AuthenticationStatus(json.userId, username, !!json.userId))
        .do((status: AuthenticationInterface) => this.status.next(status));
  }

  public logout(): void {
    this.status.next(new AuthenticationStatus(null, null, false));
  }

  get onStatus(): Observable<AuthenticationInterface> {
    return this.status.asObservable();
  }

  get isLoggedIn(): boolean {
    return this.status.getValue().isLoggedIn;
  }

  get userId(): string {
    return this.status.getValue().userId;
  }

  get username(): string {
    return this.status.getValue().username;
  }

  private createOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}
