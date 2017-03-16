import {AuthenticationInterface} from '../authentication-interface/authentication.interface';


export class AuthenticationStatus implements AuthenticationInterface {
  constructor(public username: string, public isLoggedIn: boolean) {}
}
