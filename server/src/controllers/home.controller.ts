import { Injectable } from '@decorators/di';
import { Controller, Get, Request, Response } from '@decorators/express';
import { Request as Req, Response as Res } from 'express';


@Injectable()
@Controller('/')
export default class HomeController {
  constructor() {}

  @Get('/')
  index(
    @Request() req: Req,
    @Response() res: Res
  ) {
    const user = req.user;

    if (user) {
      res.send(user.email);
    } else {
      res.sendStatus(404);
    }
  }
}
