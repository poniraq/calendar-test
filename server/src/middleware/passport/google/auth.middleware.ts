import { Middleware } from '@decorators/express';
import { authenticate } from 'passport';
import { Request, Response, NextFunction } from 'express';

export class GoogleAuthMiddleware implements Middleware {
  use(request: Request, response: Response, next: NextFunction): void {
    const handler = authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/calendar.readonly'
      ],
      failureRedirect: '/auth/login',
      prompt: 'consent',
      accessType: 'offline'
    });

    return handler(request, response, next);
  }
}