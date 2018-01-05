import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {UiModule} from './ui/ui.module';
import {MediaMatcher, BreakpointObserver} from '@angular/cdk/layout';
import {ActiveSnackbarComponent} from './ui/active-snackbar/active-snackbar.component';
import {DeletedSnackbarComponent} from './ui/deleted-snackbar/deleted-snackbar.component';
import {DropzoneComponent} from './shared/dropzone/dropzone.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    UiModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    MediaMatcher,
    BreakpointObserver,
  ],
  entryComponents: [
    ActiveSnackbarComponent,
    DeletedSnackbarComponent,
    DropzoneComponent,
  ]
})
export class AppModule { }
