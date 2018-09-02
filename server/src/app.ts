require('preload');

import * as express from 'express';
import { attachControllers } from '@decorators/express';

import { GlobalMiddleware } from 'middleware/global';
import { all } from 'controllers';

const port = parseInt(process.env.PORT || '3000');
const app = express();

app.use(GlobalMiddleware);
attachControllers(app, all);

app.listen(port, '0.0.0.0', () => {
  console.log('listening on port 3000');
});