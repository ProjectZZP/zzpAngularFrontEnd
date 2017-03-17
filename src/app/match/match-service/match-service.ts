import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable()
export class MatchService {

    constructor(private http: Http) {}

    getListOfProfileIds(profileId: string): Observable<Array<string>> {
        return this.http
            .get(environment.matcherUrl + '?profileId=' + profileId, this.createOptions())
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
