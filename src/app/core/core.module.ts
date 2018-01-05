import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {throwIfAlreadyLoaded} from './module-import.guard';
import {UiService} from './ui.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {ApiService} from './api.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  declarations: [],
  exports: [
    BrowserModule,
    MatSnackBarModule,
  ],
  providers: [
    ApiService,
    UiService,
    MatSnackBar,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
