import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import {ContactUsComponentModule} from '../../shared/contact-us/contact-us.component.module'
import {ContactUsComponent} from '../../shared/contact-us/contact-us.component'

import { AboutUsComponent } from './about-us.component';
import { AboutUsService } from './about-us.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AboutUsComponent
    ],
    providers: [
        AboutUsService,
        /*  { provide: LocationStrategy, useClass: HashLocationStrategy } */
      ],
})
export class AboutUsComponentModule { }
