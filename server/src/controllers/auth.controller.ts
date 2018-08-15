import { Injectable } from '@decorators/di';
import { Controller, Get, Response, Request, Post, Next } from '@decorators/express';
import { Response as Res, Request as Req } from 'express';
import { GoogleAuthMiddleware } from 'middleware';
import { RenderService } from 'services';
import { AuthMiddleware } from 'middleware/auth.middleware';
import { NextFunction } from 'connect';


@Injectable()
@Controller('/auth')
export default class AuthController {
  constructor(
    private renderer: RenderService
  ) {}

  @Get('/login', [
    GoogleAuthMiddleware
  ])
  login() {}
  
  @Get('/callback', [
    GoogleAuthMiddleware
  ])
  callback(
    @Response() res: Res
  ) {
    res.redirect('/');
  }

  @Get('/loggedin', [
    AuthMiddleware
  ])
  loggedin(
    @Request() req: Req,
    @Response() res: Res
  ) {
    const renderer = this.renderer;
    const user = req.user;

    res.json(renderer.json(user));
  }
  
  @Post('/logout', [
    AuthMiddleware
  ])
  logout(
    @Request() req: Req,
    @Response() res: Res,
    @Next() next: NextFunction
  ) {
    req.session.destroy((err) => {
      err ? next(err) : res.sendStatus(200);
    });
  }
}
