import { Pipe, PipeTransform } from '@angular/core';
import {Image} from '../models/image.model';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
  imagesUrl = environment.api.images_url;
  apiUrl = environment.api.url;

  transform(image: Image): any {
    if (image.path) {
      return `${this.apiUrl}/download/${image.id}`;
    }
    return null;
  }

}
