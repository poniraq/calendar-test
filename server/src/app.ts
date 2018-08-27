require('preload');

import * as express from 'express';
import * as ExpressWS from 'express-ws';
import { attachControllers } from '@decorators/express';

import { GlobalMiddleware } from 'middleware/global';
import { all } from 'controllers';

const app = express();
ExpressWS(app);

app.use(GlobalMiddleware);
attachControllers(app, all);

app.listen(3000, '0.0.0.0', () => {
  console.log('listening on port 3000');
});