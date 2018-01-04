import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/api.service';
import {Observable} from 'rxjs/Observable';
import {Image} from '../../models/image.model';

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {

  images: Observable<Image[]>;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.images = this.apiService.getDeletedImages();
  }

}
