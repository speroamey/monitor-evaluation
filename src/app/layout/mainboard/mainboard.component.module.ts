import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ContactUsComponent} from '../../shared/contact-us/contact-us.component'

import { MainboardComponent } from './mainboard.component';
import { AboutUsService } from '../about-us/about-us.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        MainboardComponent,
    ],
    providers: [
        AboutUsService,        
    ],
})
export class MainboardComponentModule { }
