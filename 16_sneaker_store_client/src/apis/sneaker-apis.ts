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
interface IGetSneakerQueries {
  page?: number;
  limit?: number;
  search?: string;
  brands?: string;
}
type getSneakersFuncType = (
  queries?: IGetSneakerQueries
) => Promise<ISneakersList>;
export const getSneakersApi: getSneakersFuncType = async (queries) => {
  const session = new Session();
  const queryStrings = new URLSearchParams(queries as any);
  if (!queries?.limit) {
    queryStrings.set("limit", "10");
  }
  if (!queries?.page) {
    queryStrings.set("page", "1");
  }
  if (!queries?.search && queryStrings.has("search")) {
    queryStrings.delete("search");
  }
  if (!queries?.brands && queryStrings.has("brands")) {
    queryStrings.delete("brands");
  }

  const response = await axios.get(
    serverUrl + sneakerUrls.list + `?${queryStrings.toString()}`,
    {
      headers: { Authorization: `Bearer ${session.token}` },
    }
  );
  return response.data as ISneakersList;
};

type getSneakersBrandsFuncType = () => Promise<string[]>;
export const getSneakersBrandsApi: getSneakersBrandsFuncType = async () => {
  const session = new Session();
  const response = await axios.get(serverUrl + sneakerUrls.brands, {
    headers: { Authorization: `Bearer ${session.token}` },
  });
  return response.data as string[];
};
