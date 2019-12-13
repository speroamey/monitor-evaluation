import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout.component';
// import { HomeComponent } from './home/home.component';
import {UserProductsComponent} from './product/products.component'
import { UserHomeComponent } from '../user_home/user_home.component';
import { LoggedInGuard } from '../../loggedIn.guard';
import {UserPrestationsComponent} from './prestations/prestations.component'
import {TestifyComponent} from './testify/testify.component'
import {UserProfileComponent} from './profile/profile.component'
import {UserUsersComponent} from './users/users.component'
import {UserCommandsComponent} from './commands/commands.component'
import {MainboardComponent} from './mainboard/mainboard.component'
const routes: Routes = [
    {
        path: '', component: MainboardComponent,
        children: [
            {
                path: 'mainboard',
                component: MainboardComponent,
            },
            {
                path: 'commands',
                component: UserCommandsComponent,
            },
            {
                path: 'users',
                component: UserUsersComponent,
            },

            {
                path: 'profile',
                component: UserProfileComponent,
            },
           
        ]
    }
];

@NgModule({
    declarations: [
        // UserProductsComponent,
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserHomeRoutingModule { }
