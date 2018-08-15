import { Injectable } from '@decorators/di';
import { Controller, Get, Next, Params, Request, Response, Query } from '@decorators/express';
import { NextFunction, Request as Req, Response as Res } from 'express';
import { AuthMiddleware } from 'middleware';
import { CalendarService } from 'services';


@Injectable()
@Controller('/calendar', [
  AuthMiddleware
])
export default class CalendarController {
  constructor(
    private calendar: CalendarService
  ) {}

  @Get('/list')
  list(
    @Request() req: Req,
    @Response() res: Res,
    @Query('syncToken') syncToken: string,
    @Next() next: NextFunction
  ) {
    const user = req.user;

    this.calendar
      .list(user, syncToken)
      .then(result => res.json(result))
      .catch(next);
  }

  @Get('/:id')
  get(
    @Request() req: Req,
    @Response() res: Res,
    @Params('id') id: string,
    @Next() next: NextFunction
  ) {
    const user = req.user;

    this.calendar
      .get(user, id)
      .then(result => res.json(result))
      .catch(next);
  }

  @Get('/:id/events')
  events(
    @Request() req: Req,
    @Response() res: Res,
    @Query('syncToken') syncToken: string,
    @Params('id') id: string,
    @Next() next: NextFunction
  ) {
    const user = req.user;

    this.calendar
      .events(user, id, syncToken)
      .then(result => res.json(result))
      .catch(next);
  }
}
