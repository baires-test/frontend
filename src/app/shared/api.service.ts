import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {environment} from '../../environments/environment';
import {Image} from '../models/image.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  apiUrl = environment.api.url;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getActiveImages(): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/images`);
  }

  getDeletedImages(): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/images/deleted`);
  }

}
