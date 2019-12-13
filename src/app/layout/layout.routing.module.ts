import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import {MainboardComponent} from './mainboard/mainboard.component'
// import {ResetPasswordComponent} from './reset-password/reset-password.component'


import { LoggedInGuard } from '../loggedIn.guard';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'mainboard',
                component: MainboardComponent,
                canActivate: [LoggedInGuard]
            },

            {
                path: 'user-home',
                loadChildren: 'app/layout/user_home/user_home.module#UserHomeModule',
                canActivate: [LoggedInGuard]
            },
            {
                path: 'reset-password/:id',
                component:HomeComponent,
            },
            {
                path: '**',
                redirectTo: 'user-home'
            },
        ]
    }
];

@NgModule({
    declarations: [
        
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
