import { NgModule } from '@angular/core';
import {EqualValidator} from '../custom-password-validation.directive'

@NgModule({
    declarations: [EqualValidator],
    exports: [EqualValidator]    
  })
  export class SharedModule { }