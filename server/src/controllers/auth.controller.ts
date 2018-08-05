import { Injectable } from '@decorators/di';
import { Controller, Get, Response } from '@decorators/express';
import { Response as Res } from 'express';
import { GoogleAuthMiddleware } from 'middleware';


@Injectable()
@Controller('/auth')
export default class AuthController {
  constructor() {}

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
}
