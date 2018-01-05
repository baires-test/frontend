import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ActiveSnackbarComponent } from './active-snackbar/active-snackbar.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { DeletedSnackbarComponent } from './deleted-snackbar/deleted-snackbar.component';
import { RestoreConfirmationComponent } from './restore-confirmation/restore-confirmation.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ActiveSnackbarComponent,
    DeleteConfirmationComponent,
    DeletedSnackbarComponent,
    RestoreConfirmationComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ActiveSnackbarComponent,
    DeletedSnackbarComponent,
  ],
  entryComponents: [
    DeleteConfirmationComponent,
    RestoreConfirmationComponent,
  ]
})
export class UiModule { }
