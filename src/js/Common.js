import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import { $scrolledElements, $body, Resp, detectIE } from './_helpers';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.addClassIE();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }
}

export default new Common();




