import { BaseModel } from 'models/base';
import { Column, CreatedAt, IsEmail, Table, UpdatedAt } from 'sequelize-typescript';
import { Render } from 'utils/annotations';

@Table({
  timestamps: true,
  tableName: 'Users'
})
export class User extends BaseModel<User> {
  disableHash: boolean = false;

  @Render
  @IsEmail
  @Column
  email: string;

  @Column
  provider: string;

  @Column
  accessToken: string;

  @Column
  refreshToken: string;

  @Render
  @CreatedAt
  createdAt: Date;
 
  @Render
  @UpdatedAt
  updatedAt: Date;
}

export { User as default };
