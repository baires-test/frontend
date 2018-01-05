import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../core/api.service';
import {Observable} from 'rxjs/Observable';
import {Image} from '../../models/image.model';
import {Subscription} from 'rxjs/Subscription';
import {UiService} from '../../core/ui.service';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit, OnDestroy {

  images: Image[];
  imagesSub: Subscription;
  resolutionSubscription: Subscription;
  cols = 4;

  constructor(
    private apiService: ApiService,
    private uiService: UiService,
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
      .deletedImages$
      .subscribe(images => {
        this.images = images;
      });
  }

  ngOnInit() {
    this.images = this.apiService.deletedImages;
    this.apiService.getDeletedImages();
  }

  openActionBar(image: Image) {
    this.uiService.openDeletedSnackbar(image);
  }

  ngOnDestroy() {
    this.imagesSub.unsubscribe();
  }

}
