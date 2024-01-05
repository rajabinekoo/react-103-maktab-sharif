import { AxiosError } from "axios";
import { ISneaker, getSneakersApi } from "../../apis/sneaker-apis";
import { errorHandler } from "../../utils/errorHandler";
import { UserInfo } from "../../utils/userInfo";
import { Session } from "../../utils/session";
import { Searchbar } from "../../components/searchbar";
import { Match } from "navigo";
import { BrandFilters } from "../../components/filters/brand";

declare global {
  interface Window {
    logout: () => void;
  }
}

window.logout = () => {
  const session = new Session();
  session.logout();
  window.navigate("/");
};

const getSneakersList = async (search?: string, brands?: string) => {
  try {
    return await getSneakersApi({ search, brands });
  } catch (error) {
    errorHandler(<AxiosError>error);
  }
};

const SneakerCard = (sneaker: ISneaker) => {
  return `
  <div class="cursor-pointer" onclick="navigate('/sneakers/${sneaker.id}')">
    <img
      class="rounded-3xl w-full h-40"
      src="${sneaker.imageURL}"
    />
    <p class="text-ellipsis overflow-hidden whitespace-nowrap text-lg font-medium mt-3">
      ${sneaker.name}
    </p>
    <p class="font-medium">$ ${sneaker.price}</p>
  </div>
  `;
};

const SneakersList = (sneakers: ISneaker[]) => {
  let html = "";
  for (const snk of sneakers) {
    html += SneakerCard(snk);
  }
  return html;
};

export const SneakersPage = async (props: Match | undefined) => {
  const sneakersList = await getSneakersList(
    props?.params?.search,
    props?.params?.brands
  );
  const userInfo = await UserInfo();

  return `
    <div class="flex justify-between items-center">
      <div class="py-4">
        <p class="font-medium text-gray-500">Good Morning</p>
        <p class="font-bold capitalize">${userInfo?.username}</p>
      </div>
      <button onclick="logout()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg> 
      </button> 
    </div>
    <div class="mb-6 mt-1">
      ${Searchbar(props)}
    </div>
    <div class="mb-6 mt-1">
      ${await BrandFilters(props)}
    </div>
    ${
      !sneakersList?.data.length
        ? "<p class='text-center w-full'>Not Found</p>"
        : ""
    }
    <main class="grid grid-cols-2 gap-4">
      ${SneakersList(sneakersList?.data || [])}
    </main>
  `;
};
