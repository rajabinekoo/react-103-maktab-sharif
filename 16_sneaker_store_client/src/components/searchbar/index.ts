import { Match } from "navigo";

declare global {
  interface Window {
    searchBarBtnHandler: () => void;
  }
}

window.searchBarBtnHandler = () => {
  const searchInput = <HTMLInputElement>document.getElementById("search-input");
  const value = searchInput?.value?.trim?.();
  const params = new URLSearchParams({ search: value });

  if (params.has("search") && !searchInput?.value?.trim?.()) {
    params.delete("search");
  }

  window.navigate(`/sneakers?${params.toString()}`);
};

export const Searchbar = (props: Match | undefined) => {
  console.log(props?.params?.search);

  return `
    <div>
      <div class="flex rounded-md shadow-sm">
        <input value="${
          props?.params?.search || ""
        }" type="text" name="search" id="search-input" class="block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search">
        <button onclick="searchBarBtnHandler()" type="button" class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>
    </div>`;
};
