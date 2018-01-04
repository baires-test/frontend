import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs/Observable';
import {Image} from '../../models/image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Observable<Image[]>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.images = this.apiService.getActiveImages();
  }

}
