import instance from "../../../interceptors/axios.interceptor";
import { type Response } from "../../../models/common/response/response";
import { type Login } from "../../../models/services/authentication/login/login.auth";
import { type IAuthenticationService } from "../../interfaces/authentication/authentication.service";

class AuthenticationService implements IAuthenticationService {
  async login(data: Login): Promise<Response<string>> {
    const response = await instance.post<Response<string>>(
      "authentication/login",
      data
    );
    return response.data;
  }
}

export const authenticationService = new AuthenticationService();
