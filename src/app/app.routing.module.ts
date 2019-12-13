import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './loggedIn.guard';

const routes: Routes = [
    {
        path: 'layout',
        loadChildren: 'app/layout/layout.module#LayoutModule',
    },
   
    {
        path: '',
        redirectTo: 'layout',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: 'not-found' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
