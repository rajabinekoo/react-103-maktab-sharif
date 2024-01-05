import axios from "axios";
import { authUrls, serverUrl } from "./urls";

export interface ISignupBody {
  username: string;
  password: string;
}
interface ISignupResponse {
  user: {
    username: string;
    id: number;
  };
  token: string;
}
type signupFuncType = (body: ISignupBody) => Promise<ISignupResponse>;
export const signupApi: signupFuncType = async (body: ISignupBody) => {
  const response = await axios.post(serverUrl + authUrls.signup, body);
  return response.data as ISignupResponse;
};
