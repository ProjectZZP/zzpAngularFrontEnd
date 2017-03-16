import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthenticationGuard} from '../authentication/index';
import {HomeComponent, LoginComponent} from '../component/index';

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthenticationGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard]}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
