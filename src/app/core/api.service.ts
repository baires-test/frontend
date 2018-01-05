import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';

import {environment} from '../../environments/environment';
import {Image} from '../models/image.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ApiService {

  apiUrl = environment.api.url;

  activesImagesSubject: Subject<any> = new Subject<any>();
  activeImages$: Observable<any> = this.activesImagesSubject.asObservable();
  activeImages: any;

  deletedImagesSubject: Subject<any> = new Subject<any>();
  deletedImages$: Observable<any> = this.deletedImagesSubject.asObservable();
  deletedImages: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getActiveImages() {
    this.httpClient
      .get(`${this.apiUrl}/images`, {
        responseType: 'json'
      })
      .subscribe(response => {
        this.activeImages = response;
        this.activesImagesSubject.next(response);
      });
  }

  getDeletedImages() {
    this.httpClient
      .get(`${this.apiUrl}/images/deleted`, {
        responseType: 'json'
      })
      .subscribe(response => {
        this.deletedImages = response;
        this.deletedImagesSubject.next(response);
      });
  }

  deleteImage(image: Image): Observable<any> {

    return this.httpClient
      .delete(`${this.apiUrl}/images/${image.id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  restoreImage(image: Image): Observable<any> {

    return this.httpClient
      .put(`${this.apiUrl}/images/${image.id}`, {}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

}
