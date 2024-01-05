import { AxiosError } from "axios";
import { Session } from "./session";

export const errorHandler = (e: AxiosError) => {
  if (e.response?.status === 403) {
    const session = new Session();
    session.logout();
    window.location.href = "/";
  }
};
