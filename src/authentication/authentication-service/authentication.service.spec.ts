import {Http, BaseRequestOptions, ResponseOptions, Response} from '@angular/http';
import {TestBed, inject } from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';

import {AuthenticationService } from '../index';

describe('AuthenticationService: ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AuthenticationService,
                BaseRequestOptions,
                {
                    provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) =>
                    new Http(mockBackend, options), deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend
            ]
        });
    });

    it('should inject', inject([AuthenticationService], (service: AuthenticationService, ) => {
        expect(service).toBeTruthy();
    }));

    it('should mock', inject([MockBackend], (mockBackend: MockBackend) => {
        expect(mockBackend).toBeTruthy();
    }));

    it('is not logged in', inject([AuthenticationService],
        (service: AuthenticationService) => {
            expect(service.username).toBeNull();
            expect(service.isLoggedIn).toBeFalsy();
        }));

    it('is not logged in', inject([AuthenticationService, MockBackend],
        (service: AuthenticationService, mockBackend: MockBackend) => {
            mockBackend.connections.subscribe((connection: any) => determineResponse(connection));
            expect(true).toBeTruthy();
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
