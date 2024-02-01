import { requestClient } from "./client";

export interface ILoginReq {
  username: string;
  password: string;
}

export interface ILoginRes {
  token: string;
}

type loginFuncType = (_: ILoginReq) => Promise<ILoginRes>;

export const login: loginFuncType = async (data) => {
  const response = await requestClient().post("/auth/login", data);
  return response.data;
};
