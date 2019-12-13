import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../shared/header/header.component';

import { UserHomeModule } from './user_home/user_home.module';

import { HomeComponentModule} from './home/home.component.module'
import { MainboardComponentModule} from './mainboard/mainboard.component.module'

import {SharedModule} from '../shared/shared.modulle'

import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeComponentModule,
        MainboardComponentModule,
        LayoutRoutingModule,
        UserHomeModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        SharedModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
    ]
})
export class LayoutModule { }
