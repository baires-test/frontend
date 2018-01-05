import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../models/image.model';
import {Subscription} from 'rxjs/Subscription';
import {UiService} from '../../core/ui.service';
import {ApiService} from '../../core/api.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit, OnDestroy {

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

  deleteConfirmation() {

    this.deleting = true;
    this.apiService
      .deleteImage(this.image)
      .subscribe(response => {

        this.apiService.getActiveImages();
        this.apiService.getDeletedImages();
        this.uiService.closeDialgoBox();
        this.uiService.dismissActiveSnackbar();
      });

  }

}
