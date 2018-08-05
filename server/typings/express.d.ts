import { User } from 'models';
import { IExtIncludeOptions } from 'sequelize-typescript';

declare module 'express' {
  export interface Request {
    id: string;
    
    user?: User;
    include?: IExtIncludeOptions[]
  }
}