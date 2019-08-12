import { RequestHandler } from 'express';
import 'reflect-metadata';

import Methods from '../enums/methods.enum';
import Metadata from '../enums/metadata.enum';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = (method: string) => (path: string) => (
  target: any,
  key: string,
  desc: RouteHandlerDescriptor
) => {
  Reflect.defineMetadata(Metadata.Path, path, target, key);
  Reflect.defineMetadata(Metadata.Method, method, target, key);
};

export const get = routeBinder(Methods.Get);
