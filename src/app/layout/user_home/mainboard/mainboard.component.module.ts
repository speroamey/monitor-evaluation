import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainboardComponent } from './mainboard.component';


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
              
    ],
})
export class MainboardComponentModule { }
