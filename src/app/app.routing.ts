import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent, LoginComponent} from './component/index';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
