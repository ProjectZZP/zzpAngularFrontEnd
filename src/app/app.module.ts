import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule } from '@angular/http';
import {AuthenticationService} from './authentication/index';
import {appRoutingProviders, routing} from './app.routing';
import {HomeComponent, LoginComponent, NavigationComponent} from './component/index';
import {AppComponent} from './app.component';
import {ProfileService} from './profile/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent
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
    AuthenticationService,
    ProfileService,
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
