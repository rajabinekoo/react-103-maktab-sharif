import { userType } from "./main";
import axios from "axios";

// object type usage

export type fetchUsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<userType>;
};
export async function fetchUsers(url?: string): Promise<fetchUsersResponse> {
  if (!url) url = "https://reqres.in/api/users?page=1";
  const response = await axios.get(url);
  return response.data;
}

type fetchUsersFuncType = (_?: string) => Promise<fetchUsersResponse>;
export const fetchUsers2: fetchUsersFuncType = async (url) => {
  const response = await axios.get(url || "https://reqres.in/api/users?page=1");
  return response.data;
};
