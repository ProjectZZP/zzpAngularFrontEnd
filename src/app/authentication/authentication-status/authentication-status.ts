import {AuthenticationInterface} from '../authentication-interface/authentication.interface';


export class AuthenticationStatus implements AuthenticationInterface {
  constructor(public userId: string, public username: string, public isLoggedIn: boolean) {}
}
