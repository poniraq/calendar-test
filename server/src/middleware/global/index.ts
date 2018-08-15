import { compose } from 'compose-middleware';
import { ParserMiddleware } from './parsers';
import { PassportMiddleware } from './passport';
import { RequestIdMiddleware } from './request-id';
import { SessionMiddleware } from './session';
import { StaticMiddleware } from './static';


const GlobalMiddleware = compose([
  StaticMiddleware,
  RequestIdMiddleware,
  ParserMiddleware,
  SessionMiddleware,
  PassportMiddleware
]);

export { GlobalMiddleware, GlobalMiddleware as default };
