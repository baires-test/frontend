import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RecycleComponent } from './recycle/recycle.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, RecycleComponent]
})
export class HomeModule { }
