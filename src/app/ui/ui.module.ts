import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SnackbarComponent,
    NavComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class UiModule { }
