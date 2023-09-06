import { Login } from "../../../models/services/authentication/login/login.auth";
import { type Category } from "../../../models/services/products";

export interface IAuthenticationService {
  login(data: Login): Promise<Response<string>>;
}
