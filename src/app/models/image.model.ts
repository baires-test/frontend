import {ImageStatus} from './image-status.enum';
import {Thumbnail} from './thumbnail.model';


export interface Image {
  id: string;
  name: string;
  path: string;
  status: ImageStatus;
  thumbnails: Thumbnail[];
}
