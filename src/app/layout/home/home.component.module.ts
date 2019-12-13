import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ContactUsComponent} from '../../shared/contact-us/contact-us.component'

import { HomeComponent } from './home.component';
import { AboutUsService } from '../about-us/about-us.service';

import {ContactUsComponentModule} from '../../shared/contact-us/contact-us.component.module'
import { ContactUsService } from '../../shared/contact-us/contact-us.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
        AboutUsService,        
    ],
})
export class HomeComponentModule { }
