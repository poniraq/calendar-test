import { Injectable } from '@decorators/di';
import { Controller, Get, Next, Request, Response } from '@decorators/express';
import { NextFunction, Request as Req, Response as Res } from 'express';
import { AuthMiddleware } from 'middleware/auth.middleware';
import { CalendarService } from 'services/calendar.service';

@Injectable()
@Controller('/', [
  AuthMiddleware
])
export default class HomeController {
  constructor(
    private calendar: CalendarService
  ) {}

  @Get('/')
  index(
    @Request() req: Req,
    @Response() res: Res,
    @Next() next: NextFunction
  ) {
    const user = req.user;

    this.calendar
      .getCalendarList(user)
      .then(result => res.json(result))
      .catch(next);
  }
}
