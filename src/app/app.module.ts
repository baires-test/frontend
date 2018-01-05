import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {UiModule} from './ui/ui.module';
import {MediaMatcher} from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    UiModule
  ],
  bootstrap: [AppComponent],
  providers: [
    MediaMatcher
  ]
})
export class AppModule { }
