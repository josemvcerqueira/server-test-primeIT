import path from 'path';

import express, { Response, Request } from 'express';

import { get, controller } from '../decorators';

@controller('/images')
class ImageController {
  @get('/:img')
  getOneImage(req: Request, res: Response) {
    const img: string = req.params.img;
    console.log(img);
    res
      .status(200)
      .sendFile(img, { root: path.join(__dirname, '../../images') });
  }
}
