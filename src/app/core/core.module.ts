import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {throwIfAlreadyLoaded} from './module-import.guard';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  declarations: [],
  exports: [
    BrowserModule,
    NgbModule,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
