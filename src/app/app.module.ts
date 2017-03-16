import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AuthenticationService} from '../authentication/index';
import {appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
