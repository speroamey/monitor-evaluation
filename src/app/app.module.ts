import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module'
import { PrincipalService } from './shared/services/principal.service';
import { LoggedInGuard } from './loggedIn.guard';
import { PagerService } from './shared/services/pager.service';
import {ResetPasswordComponent} from './shared/reset-password/reset-password.component'

@NgModule({
 
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule,
    CKEditorModule,
  ],
  declarations: [
    AppComponent,
    ResetPasswordComponent
  ],
  providers: [
    PrincipalService,
    LoggedInGuard,
    PagerService
    /*  { provide: LocationStrategy, useClass: HashLocationStrategy } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
