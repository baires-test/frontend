import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { ThumbnailPipe } from './thumbnail.pipe';
import { ThumbnailTitlePipe } from './thumbnail-title.pipe';
import {
  MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatGridListModule, MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { ImagePathPipe } from './image-path.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
  ],
  declarations: [
    ThumbnailPipe,
    ThumbnailTitlePipe,
    ImagePathPipe,
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
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    ImagePathPipe,
  ],
  providers: [
    MatDialog,
  ]
})
export class SharedModule { }
