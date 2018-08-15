export function isUserData(data: any): data is UserData {
  return data.id && typeof data.id === 'number' &&
         data.email && typeof data.email === 'string' &&
         data.accessToken && typeof data.accessToken === 'string';
}
export interface UserData {
  id: number;
  email: string;
  accessToken: string;
}

export class User {
  private data: UserData;

  constructor(data: UserData) {
    this.data = data;
  }

  public get id() { return this.data.id; }
  public get email() { return this.data.email; }
  public get token() { return this.data.accessToken; }
}
