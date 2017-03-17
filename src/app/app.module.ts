import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule } from '@angular/http';
import {AuthenticationService} from './authentication/index';
import {appRoutingProviders, routing} from './app.routing';
import {HomeComponent, LoginComponent, MatchesComponent, NavigationComponent, EntityComponent} from './component/index';
import {AppComponent} from './app.component';
import {ProfileService} from './profile/index';
import {EntityService} from './entity/entity-service/entity.service';
import {MatchService} from './match/match-service/match-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MatchesComponent,
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
    EntityService,
    MatchService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
