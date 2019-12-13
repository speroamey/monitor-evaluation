import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css';
import { FlatpickrModule } from 'angularx-flatpickr';
import { ToastrModule } from 'ngx-toastr';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule} from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { PrincipalService } from './shared/services/principal.service';
import { LoggedInGuard } from './loggedIn.guard';
import { PagerService } from './shared/services/pager.service';
import {SharedModule} from './shared/shared.modulle'

@NgModule({
 
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule,
    CKEditorModule,
    SharedModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot()
  ],
  declarations: [
    AppComponent
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
