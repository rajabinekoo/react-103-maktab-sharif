import axios from "axios";
import { serverUrl, userUrls } from "./urls";
import { Session } from "../utils/session";

export interface IUserInfoReponse {
  id: number;
  username: string;
}

type getUserInfoFuncType = () => Promise<IUserInfoReponse>;
export const getUserInfoApi: getUserInfoFuncType = async () => {
  const session = new Session();
  const response = await axios.get(serverUrl + userUrls.userInfo, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  return response.data as IUserInfoReponse;
};
