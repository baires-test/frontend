import { Pipe, PipeTransform } from '@angular/core';
import {Image} from '../models/image.model';

@Pipe({
  name: 'thumbnailTitle'
})
export class ThumbnailTitlePipe implements PipeTransform {

  transform(image: Image): any {

    return image.name || '';
  }

}
