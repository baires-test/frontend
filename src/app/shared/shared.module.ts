import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { ThumbnailPipe } from './thumbnail.pipe';
import { ThumbnailTitlePipe } from './thumbnail-title.pipe';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    ThumbnailPipe,
    ThumbnailTitlePipe,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ThumbnailPipe,
    ThumbnailTitlePipe,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    ApiService,
  ]
})
export class SharedModule { }
