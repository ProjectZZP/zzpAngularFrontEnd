import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Profile} from "../index";
import {environment} from '../../../environments/environment';


@Injectable()
export class ProfileService {

  constructor(private http: Http) {}

  getSingleProfile(profileId: string): Observable<Profile> {
    return this.http
        .get(environment.profileUrl + '/' + profileId, this.createOptions())
        .map((res: Response) => res.json())
        .do((json: any) => console.log(json))
        .map((json: any) => new Profile(json.profileId, json.entityId, json.title, json.description, json.tags));
  }

  getAllMyProfileIds(): Observable<Array<string>> {
    return this.http
        .get(environment.profileUrl, this.createOptions())
        .map((res: Response) => res.json())
        .do((json: any) => console.log(json));
  }

  private createOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}
