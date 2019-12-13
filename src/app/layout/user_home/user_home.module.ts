import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProductsModule } from './product/products.module'
import { UserHomeComponent } from './user_home.component';
import { UserHomeRoutingModule } from './user_home.routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {UserPrestationsModule} from './prestations/prestations.module'
import {TestifyComponentModule} from './testify/testify.component.module'
import {UserProfileModule} from './profile/profile.module'
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { UserUsersModule } from './users/users.module';
import { UserCommandsModule } from './commands/commands.module';
import {MainboardComponentModule} from './mainboard/mainboard.component.module'


@NgModule({
    imports: [
        CommonModule,
        UserProductsModule,
        UserHomeRoutingModule,
        NgxPaginationModule,
        UserPrestationsModule,
        TestifyComponentModule,
        UserProfileModule,
        UserUsersModule,
        UserCommandsModule,
        MainboardComponentModule
    ],
    declarations: [
        UserHomeComponent,
        SidenavComponent
    ]
})
export class UserHomeModule { }
