import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule } from '@angular/http';
import {AuthenticationService} from './authentication/index';
import {appRoutingProviders, routing} from './app.routing';
import {HomeComponent, LoginComponent, NavigationComponent, EntityComponent} from './component/index';
import {AppComponent} from './app.component';
import {ProfileService} from './profile/index';
import {EntityService} from "./entity/entity-service/entity.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    EntityComponent
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
    appRoutingProviders,
    EntityService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
