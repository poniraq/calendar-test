import { Request, Response, NextFunction } from 'express';
import { Middleware } from '@decorators/express';

export class AuthMiddleware implements Middleware {
  use(request: Request, response: Response, next: NextFunction): void {
    if (request.isUnauthenticated()) return response.redirect('/auth/login');

    next();
  }
};