import axios from "axios";
import { errorHandler } from "./errorHandler";

let user;

export async function fetchUserInfo() {
  if (!!user) return user;

  const token = window.sessionStorage.getItem("token");
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/user",
      headers: { Authorization: `Bearer ${token}` },
    });
    user = { id: response.data.id, username: response.data.username };
    return user;
  } catch (error) {
    errorHandler(error);
  }
}
