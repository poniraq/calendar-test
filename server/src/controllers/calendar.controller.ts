import { Injectable } from '@decorators/di';
import { Body, Controller, Get, Next, Params, Patch, Query, Request, Response } from '@decorators/express';
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

  @Patch('/:calendarId/events/:eventId')
  updateEvent(
    @Request() req: Req,
    @Response() res: Res,
    @Body('patch') patch: any,
    @Params('calendarId') calendarId: string,
    @Params('eventId') eventId: string,
    @Next() next: NextFunction
  ) {
    const user = req.user;

    this.calendar
      .patchEvent(user, calendarId, eventId, patch)
      .then(result => res.json(result))
      .catch(next);
  }
}
