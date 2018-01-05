import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { ThumbnailPipe } from './thumbnail.pipe';
import { ThumbnailTitlePipe } from './thumbnail-title.pipe';
import {
  MatButtonModule, MatCardModule, MatDialog, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { ImagePathPipe } from './image-path.pipe';
import {DropzoneComponent} from './dropzone/dropzone.component';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    ThumbnailPipe,
    ThumbnailTitlePipe,
    ImagePathPipe,
    DropzoneComponent,
    ImageUploadComponent,
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
    DropzoneComponent,
    ImageUploadComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    MatDialog,
  ]
})
export class SharedModule { }
