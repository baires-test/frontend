import { Pipe, PipeTransform } from '@angular/core';
import {Image} from '../models/image.model';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  imagesUrl = environment.api.images_url;

  transform(image: Image): any {
    if(image.thumbnails.length > 0) {
      return `${this.imagesUrl}/${image.id}/${image.thumbnails[2].path}`;
    }
    return null;
  }

}
