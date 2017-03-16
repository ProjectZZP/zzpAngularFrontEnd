import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {AuthenticationGuard, AuthenticationService} from '../authentication/index';
import {appRoutingProviders, routing} from './app.routing';
import {HomeComponent, LoginComponent} from '../component/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
