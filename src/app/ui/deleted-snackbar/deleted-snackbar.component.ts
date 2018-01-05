import {Component, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../../models/image.model';
import {Subscription} from 'rxjs/Subscription';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UiService} from '../../core/ui.service';

import {RestoreConfirmationComponent} from '../restore-confirmation/restore-confirmation.component';

@Component({
  selector: 'app-deleted-snackbar',
  templateUrl: './deleted-snackbar.component.html',
  styleUrls: ['./deleted-snackbar.component.scss']
})
export class DeletedSnackbarComponent implements OnInit, OnDestroy {
  imageSub: Subscription;
  image: Image;

  dialogRef: MatDialogRef<any>;

  constructor(
    private uiService: UiService,
    private dialog: MatDialog,
  ) {
    this.imageSub = this.uiService
      .activeSnackbarChange$
      .subscribe(image => {
        this.image = image;
      });

    this.uiService
      .closeDialogBoxChange$
      .subscribe(close => {
        if (close) {
          this.dialogRef.close();
        }
      });
  }

  ngOnInit() {
    this.image = this.uiService.activeImage;
  }

  dismissSnackbar() {
    this.uiService.dismissActiveSnackbar();
  }

  restoreImage() {
    this.dialogRef = this.dialog.open(RestoreConfirmationComponent);
  }

  ngOnDestroy() {
    this.imageSub.unsubscribe();
  }

}
