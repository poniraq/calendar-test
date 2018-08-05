import { initialize, session } from 'passport';
import { compose } from 'compose-middleware';

export const PassportMiddleware = compose([
  initialize(),
  session()
]);