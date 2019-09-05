import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us.component'

const routes: Routes = [
    {
        path: '',
        component:AboutUsComponent
    },
   

    { path: '**', redirectTo: 'not-found' } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
