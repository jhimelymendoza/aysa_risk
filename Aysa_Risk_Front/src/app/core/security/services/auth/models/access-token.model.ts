/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { User } from './user-data.model';

export class AccessTokenModel {
  accessToken!: string;
  /**
   *
   */
  constructor(accessToken?: string) {
    this.accessToken = accessToken ?? '';
  }
}

export class Login {
  user!: User;
  accessToken!: AccessTokenModel;

  constructor(login?: any) {
    this.user = new User(login.user);
    this.accessToken = new AccessTokenModel(login?.token);
  }
}
