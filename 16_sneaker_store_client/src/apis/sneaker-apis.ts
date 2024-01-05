import axios from "axios";
import { sneakerUrls, serverUrl } from "./urls";
import { Session } from "../utils/session";

export interface ISneaker {
  id: number;
  name: string;
  imageURL: string;
  colors: string;
  sizes: string;
  price: number;
  category: string;
  gender: string;
  brand: string;
}
interface ISneakersList {
  total: number;
  totalPages: number;
  page: number;
  perPage: number;
  data: ISneaker[];
}
type getSneakersFuncType = (
  page?: number,
  limit?: number
) => Promise<ISneakersList>;
export const getSneakersApi: getSneakersFuncType = async (
  page = 1,
  limit = 10
) => {
  const session = new Session();
  const response = await axios.get(
    serverUrl + sneakerUrls.list + `?page=${page}&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${session.token}` },
    }
  );
  return response.data as ISneakersList;
};
