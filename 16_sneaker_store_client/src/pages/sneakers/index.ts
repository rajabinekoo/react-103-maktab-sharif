import { AxiosError } from "axios";
import { getSneakersApi } from "../../apis/sneaker-apis";
import { errorHandler } from "../../utils/errorHandler";

const getSneakersList = async () => {
  try {
    return await getSneakersApi();
  } catch (error) {
    errorHandler(<AxiosError>error);
  }
};

export const SneakersPage = async () => {
  const sneakersList = await getSneakersList();
  console.log(sneakersList);
  return `<p>Sneakers list</p>`;
};
