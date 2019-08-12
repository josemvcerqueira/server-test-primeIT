import 'reflect-metadata';

import AppRouter from '../app-router';
import Methods from '../enums/methods.enum';
import Metadata from '../enums/metadata.enum';

const controller = (routePrefix: string) => (target: Function) => {
  const router = AppRouter.getInstance;

  for (let key in target.prototype) {
    const routeHandler = target.prototype[key];

    const path = Reflect.getMetadata(Metadata.Path, target.prototype, key);
    const method: Methods = Reflect.getMetadata(
      Metadata.Method,
      target.prototype,
      key
    );
    const middlewares =
      Reflect.getMetadata(Metadata.Middleware, target.prototype, key) || [];

    if (path)
      router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
  }
};

export default controller;
