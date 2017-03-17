import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AuthenticationInterface, AuthenticationStatus} from '../index';
import {environment} from '../../../environments/environment';


@Injectable()
export class AuthenticationService implements AuthenticationInterface {
  private status: BehaviorSubject<AuthenticationInterface>;

  constructor(private http: Http) {
    this.status = new BehaviorSubject<AuthenticationInterface>(new AuthenticationStatus(null, false));
  }

  public login(username: string): Observable<AuthenticationInterface> {
    this.http
        .post(environment.loginUrl, {userId:username}, this.createOptions())
        .do((res: Response) => console.log(res.text()))
        .map((res: Response) => res.json())
        .do((json: any) => console.log(json))
        .subscribe((json: any) => {
          this.status.next(new AuthenticationStatus(username, true));
        });

    //setTimeout(() => this.status.next(new AuthenticationStatus(username, true)), 1);

    return this.status.asObservable();
  }

  public logout(): void {
    // for now:
    this.status.next(new AuthenticationStatus(null, false));
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

  private createOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}
