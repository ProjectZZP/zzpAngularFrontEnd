import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Entity} from "../index";
import {environment} from '../../../environments/environment';


@Injectable()
export class EntityService {
  entity: Entity;

  constructor(private http: Http) {
  }

  getSingleEntity(entityId: string): Observable<Entity> {
    return this.http
        .get(environment.entityUrl, this.createOptions())
        .map((res: Response) => res.json())
        .map((json: any) => new Entity(json.entityId, json.userId, json.name, json.description));
  }

  private createOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}
