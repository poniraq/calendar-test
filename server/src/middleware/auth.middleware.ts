import { Request, Response, NextFunction } from 'express';
import { Middleware } from '@decorators/express';
import { Unauthorized } from 'http-errors';

export class AuthMiddleware implements Middleware {
  use(request: Request, _response: Response, next: NextFunction): void {
    if (request.isUnauthenticated()) return next(new Unauthorized);
    next();
  }
};