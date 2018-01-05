import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RecycleComponent } from './recycle/recycle.component';
import {SharedModule} from '../shared/shared.module';
import {ImageUploadComponent} from '../shared/image-upload/image-upload.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    RecycleComponent,
  ],
  entryComponents: [
    ImageUploadComponent,
  ]
})
export class HomeModule { }
