import axios from "axios";
import { getSessionToken } from "../libs/sessionManager";

export const requestClient = () => {
  const session = getSessionToken();
  return axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${session}`,
    },
  });
};
