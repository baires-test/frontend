import {ChangeDetectorRef, Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {MatSnackBar, MatSnackBarRef} from '@angular/material';

import {ActiveSnackbarComponent} from './ui/active-snackbar/active-snackbar.component';
import {UiService} from './core/ui.service';
import {DeletedSnackbarComponent} from './ui/deleted-snackbar/deleted-snackbar.component';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  snackbarRef: MatSnackBarRef<any>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private uiService: UiService,
    private breakpointObserver: BreakpointObserver,
    private matSnackbar: MatSnackBar,
    private router: Router
  ) {
    this.matchBreakpoints();
    this.observeActiveSnackbar();
    this.observeDismissSnackbar();
    this.onRouteChange();
  }

  onRouteChange() {
    this.router.events
      .subscribe(val => {
        if (val instanceof NavigationStart && this.snackbarRef) {
          this.snackbarRef.dismiss();
        }
      });
  }

  matchBreakpoints() {
    this.observeWeb();
    this.observeTablet();
    this.observeHandset();
  }

  observeActiveSnackbar() {

    this.uiService
      .activeSnackbarChange$
      .subscribe(open => {
        if (open) {
          this.snackbarRef = this.matSnackbar.openFromComponent(ActiveSnackbarComponent);
        }
      });

    this.uiService
      .deletedSnackbarChange$
      .subscribe(open => {
        if (open) {
          this.snackbarRef = this.matSnackbar.openFromComponent(DeletedSnackbarComponent);
        }
      });
  }

  observeDismissSnackbar() {
    this.uiService
      .dismissSnackbarChange$
      .subscribe(dismiss => {
        if (dismiss && this.snackbarRef !== null) {
          this.snackbarRef.dismiss();
        }
      });
  }

  private observeWeb() {
    this.breakpointObserver
      .observe([
        Breakpoints.WebPortrait,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('web-portrait');
          this.uiService.setMobile(false);
        }
      });

    this.breakpointObserver
      .observe([
        Breakpoints.WebLandscape,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('web-landscape');
          this.uiService.setMobile(false);
        }
      });
  }

  private observeTablet() {
    this.breakpointObserver
      .observe([
        Breakpoints.TabletPortrait,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('tablet-portrait');
          this.uiService.setMobile(false);
        }
      });

    this.breakpointObserver
      .observe([
        Breakpoints.TabletLandscape,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('tablet-landscape');
          this.uiService.setMobile(false);
        }
      });
  }

  private observeHandset() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetPortrait,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('handset-portrait');
          this.uiService.setMobile(true);
        }
      });

    this.breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
      ])
      .subscribe(result => {
        if (result.matches) {
          this.uiService.setResolution('handset-landscape');
          this.uiService.setMobile(true);
        }
      });
  }

}
