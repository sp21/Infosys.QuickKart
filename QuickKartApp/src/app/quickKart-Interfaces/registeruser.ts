import { IRole } from './role';

export interface IRegisterUser {
  EmailId: string;
  UserPassword: string;
  RoleId: number;
  Gender: string;
  DateOfBirth: Date;
  Address: string; 
  //Role: IRole;
}
