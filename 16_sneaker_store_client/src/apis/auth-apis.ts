import axios from "axios";
import { authUrls, serverUrl } from "./urls";

interface IAuthResponse {
  user: {
    username: string;
    id: number;
  };
  token: string;
}

export interface ISignupBody {
  username: string;
  password: string;
}
type signupFuncType = (body: ISignupBody) => Promise<IAuthResponse>;
export const signupApi: signupFuncType = async (body: ISignupBody) => {
  const response = await axios.post(serverUrl + authUrls.signup, body);
  return response.data as IAuthResponse;
};

export interface ILoginBody {
  username: string;
  password: string;
}
type loginFuncType = (body: ILoginBody) => Promise<IAuthResponse>;
export const loginApi: loginFuncType = async (body: ILoginBody) => {
  const response = await axios.post(serverUrl + authUrls.login, body);
  return response.data as IAuthResponse;
};