import {Component, OnDestroy, OnInit} from '@angular/core';
import {UiService} from '../../core/ui.service';
import {Subscription} from 'rxjs/Subscription';
import {Image} from '../../models/image.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-active-snackbar',
  templateUrl: './active-snackbar.component.html',
  styleUrls: ['./active-snackbar.component.scss']
})
export class ActiveSnackbarComponent implements OnInit, OnDestroy {

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

  deleteImage() {
    this.dialogRef = this.dialog.open(DeleteConfirmationComponent);
  }

  ngOnDestroy() {
    this.imageSub.unsubscribe();
  }

}
