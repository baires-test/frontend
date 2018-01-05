import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/of';

import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

  apiUrl = environment.api.url;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getActiveImages(): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/images`, {
        responseType: 'json'
      });
  }

  getDeletedImages(): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/images/deleted`, {
        responseType: 'json'
      });
  }

}
