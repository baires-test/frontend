import {ImageStatus} from './image-status.enum';
import {ImagePath} from './image-path.interface';

export interface Image {
  name: string;
  path: ImagePath;
  status: ImageStatus;
}
