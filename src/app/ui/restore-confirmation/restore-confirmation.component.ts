import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../models/image.model';
import {UiService} from '../../core/ui.service';
import {Subscription} from 'rxjs/Subscription';
import {ApiService} from '../../core/api.service';

@Component({
  selector: 'app-restore-confirmation',
  templateUrl: './restore-confirmation.component.html',
  styleUrls: ['./restore-confirmation.component.scss']
})
export class RestoreConfirmationComponent implements OnInit, OnDestroy {

  imageSub: Subscription;
  image: Image;

  deleting: boolean;

  constructor(
    private uiService: UiService,
    private apiService: ApiService,
  ) {
    this.imageSub = this.uiService
      .activeSnackbarChange$
      .subscribe(image => {
        this.image = image;
      });
  }

  ngOnInit() {
    this.deleting = false;
    this.image = this.uiService.activeImage;
  }

  ngOnDestroy() {
    this.imageSub.unsubscribe();
  }

  restoreConfirmation() {

    this.deleting = true;
    this.apiService
      .restoreImage(this.image)
      .subscribe(response => {

        this.apiService.getDeletedImages();
        this.uiService.closeDialgoBox();
        this.uiService.dismissActiveSnackbar();
      });

  }
}
