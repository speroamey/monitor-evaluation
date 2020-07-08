import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import * as startOfDay from "date-fns";
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaComponent } from './agenda.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
    //     CalendarModule.forRoot({
    //     provide: DateAdapter,
    //     useFactory: adapterFactory
    // })

    ],
    declarations: [
        AgendaComponent,
    ],
    providers: [
              
    ],
})
export class MainboardComponentModule { }
