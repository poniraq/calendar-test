import { getMeta } from '@decorators/express/lib/src/meta';
import { Type as Middleware } from '@decorators/express/lib/src/middleware';

function decoratorFactory(method: string, url: string, middleware?: Middleware[]) {
  return (target: Object, key: string, descriptor: PropertyDescriptor) => {
      const meta = getMeta(target);
      
      meta.routes[key] = { method, url, middleware };
      return descriptor;
  };
}

export function WebSocket(url: string, middleware?: Middleware[]) {
  return decoratorFactory('ws', url, middleware);
}