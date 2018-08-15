import { static as ExpressStatic } from 'express';
import { join } from 'path';

export const StaticMiddleware = ExpressStatic(join(process.cwd(), '../webapp/dist/webapp'));