import { IDto } from '../../../../services/models/IDtoBase';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class ChangePasswordModel {
  password: string;
  repeatPassword: string;

  constructor(password: string, repeatPassword: string) {
    this.password = password;
    this.repeatPassword = repeatPassword;
  }
}

export type Profile = 'Administrador' | 'Bot' | 'Usuario';

export class User implements IDto {
  id: string | number;
  public email: string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public profile: Profile;

  constructor(user?: any) {
    this.id = user?.id || '';
    this.email = user?.mail || '';
    this.username = user?.username || '';
    this.firstName = user?.givenName || '';
    this.lastName = user?.lastName || '';
    this.profile = user?.perfil || 'Usuario';
  }
}
