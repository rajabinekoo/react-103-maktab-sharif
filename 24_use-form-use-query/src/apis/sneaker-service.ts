import { IGetListRes } from "../libs/types";
import { requestClient } from "./client";

export interface ISneakerRes {
  id: number;
  pid: number;
  price: number;
  name: string;
  sizes: string;
  brand: string;
  colors: string;
  gender: string;
  imageURL: string;
  category: string;
}

type sneakerListFuncType = (
  page?: number,
  search?: string,
  limit?: number
) => Promise<IGetListRes<ISneakerRes>>;

export const fetchSneakerList: sneakerListFuncType = async (
  page = 1,
  search = "",
  limit = 10
) => {
  const response = await requestClient().get(
    `/sneaker?page=${page}&limit=${limit}&search=${search}`
  );
  return response.data;
};
