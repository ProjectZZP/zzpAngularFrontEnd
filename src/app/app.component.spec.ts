/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend} from '@angular/http/testing';
import {HttpModule, XHRBackend} from '@angular/http';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      import: [
        HttpModule,
        RouterModule,
        RouterTestingModule
      ],
      provide: [
        {provide: XHRBackend, useClass: MockBackend}
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });
});
