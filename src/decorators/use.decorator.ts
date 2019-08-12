import 'reflect-metadata';
import { RequestHandler } from 'express';

import Metadata from '../enums/metadata.enum';

const use = (middleware: RequestHandler) => (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => {
  const middlewares =
    Reflect.getMetadata(Metadata.Middleware, target, key) || [];

  Reflect.defineMetadata(
    Metadata.Middleware,
    [...middlewares, middleware],
    target,
    key
  );
};
