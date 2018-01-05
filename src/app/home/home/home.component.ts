import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MatDialog, MatDialogRef} from '@angular/material';

import {ApiService} from '../../core/api.service';
import {Image} from '../../models/image.model';
import {UiService} from '../../core/ui.service';
import {ImageUploadComponent} from '../../shared/image-upload/image-upload.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  images: Image[];
  imagesSub: Subscription;
  resolutionSubscription: Subscription;
  cols = 4;

  dialogRef: MatDialogRef<any>;

  constructor(
    private apiService: ApiService,
    private uiService: UiService,
    private dialog: MatDialog,
  ) {
    this.resolutionSubscription = this.uiService
      .resolutionChange$
      .subscribe(resolution => {

          switch (resolution) {
            case 'web-landscape':
            case 'tablet-landscape':
              this.cols = 4;
              break;
            case 'web-portrait':
            case 'tablet-portrait':
            case 'handset-landscape':
              this.cols = 3;
              break;
            case 'handset-portrait':
              this.cols = 2;
              break;
          }
      });

    this.imagesSub = this.apiService
      .activeImages$
      .subscribe(images => {
        this.images = images;
      });

    this.uiService
      .closeDialogBoxChange$
      .subscribe(close => {
        if (close && this.dialogRef) {
          this.dialogRef.close();
        }
      });
  }

  ngOnInit() {
    this.images = this.apiService.activeImages;
    this.apiService.getActiveImages();
  }

  openActionBar(image: Image) {
    this.uiService.openActiveSnackbar(image);
  }

  openNewImage() {
    this.dialogRef = this.dialog.open(ImageUploadComponent);
  }

  ngOnDestroy() {
    this.resolutionSubscription.unsubscribe();
    this.imagesSub.unsubscribe();
  }

}
