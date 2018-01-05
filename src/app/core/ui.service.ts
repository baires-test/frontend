import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {Image} from '../models/image.model';

@Injectable()
export class UiService {

  resolutionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('web-landscape');
  resolutionChange$: Observable<string> = this.resolutionSubject.asObservable();

  mobileSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  mobileChange$: Observable<boolean> = this.mobileSubject.asObservable();

  activeImage: Image;

  activeSnackbarSubject: Subject<Image> = new Subject<Image>();
  activeSnackbarChange$: Observable<Image> = this.activeSnackbarSubject.asObservable();

  deletedSnackbarSubject: Subject<Image> = new Subject<Image>();
  deletedSnackbarChange$: Observable<Image> = this.deletedSnackbarSubject.asObservable();

  dismissSnackbarSubject: Subject<boolean> = new Subject<boolean>();
  dismissSnackbarChange$: Observable<boolean> = this.dismissSnackbarSubject.asObservable();

  closeDialogBoxSubject: Subject<boolean> = new Subject<boolean>();
  closeDialogBoxChange$: Observable<boolean> = this.closeDialogBoxSubject.asObservable();

  newImageSubject: Subject<boolean> = new Subject<boolean>();
  newImageChange$: Observable<boolean> = this.newImageSubject.asObservable();

  constructor() {

  }

  setResolution(resolution: string) {
    this.resolutionSubject.next(resolution);
  }

  setMobile(isMobile: boolean) {
    this.mobileSubject.next(isMobile);
  }

  openActiveSnackbar(image: Image) {
    this.activeImage = image;
    this.activeSnackbarSubject.next(image);
  }

  dismissActiveSnackbar() {
    this.dismissSnackbarSubject.next(true);
  }

  closeDialgoBox() {
    this.closeDialogBoxSubject.next(true);
  }

  openDeletedSnackbar(image: Image) {
    this.activeImage = image;
    this.deletedSnackbarSubject.next(image);
  }

  openNewImageUpload() {
    this.newImageSubject.next(true);
  }

}
