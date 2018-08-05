import { ParserMiddleware } from './parsers';
import { RequestIdMiddleware } from './request-id';
import { SessionMiddleware } from './session';
import { PassportMiddleware } from './passport';
import { compose } from 'compose-middleware';

const GlobalMiddleware = compose([
  RequestIdMiddleware,
  ParserMiddleware,
  SessionMiddleware,
  PassportMiddleware
]);

export { GlobalMiddleware, GlobalMiddleware as default };
