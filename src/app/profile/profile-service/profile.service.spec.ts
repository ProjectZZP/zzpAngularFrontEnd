import {HttpModule, Http, ConnectionBackend, BaseRequestOptions, ResponseOptions, Response, RequestOptions} from '@angular/http';
import {TestBed, inject } from '@angular/core/testing';
import { MockBackend} from '@angular/http/testing';

import {ProfileService} from './profile.service';

describe('ProfileService: ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                MockBackend,
                {provide: RequestOptions, useClass: BaseRequestOptions},
                {provide: ConnectionBackend, useClass: MockBackend},
                Http,
                ProfileService
            ]
        });
    });

    it('should inject', inject([ProfileService], (service: ProfileService, ) => {
        expect(service).toBeTruthy();
    }));

    it('should mock', inject([MockBackend], (mockBackend: MockBackend) => {
        expect(mockBackend).toBeTruthy();
    }));
});

function determineResponse(connection: any): void {
    if (('someurl') === connection.request.url) {
        connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
                'global.enum.man': 'Man',
                'global.enum.vrouw': 'Vrouw',
            })
        })));
    } else {
        connection.mockError(404);
    }
}
