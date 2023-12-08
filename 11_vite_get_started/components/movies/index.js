import { formatDate } from "/libs/utils/formatDate";
import { getMovies, removeMovie } from "/libs/moviesList";
import { editMovie } from "../editBtn";

const tbody = document.getElementById("movies-list-tbody");

const handleOnRemove = (ev) => {
  const id = ev.target.dataset.userId;
  if (!id) return;
  removeMovie(Number(id));
  RenderMoviesTable();
};

const handleOnUpdate = (ev) => {
  const id = ev.target.dataset.editId;
  if (!id) return;
  editMovie(id);
};

const handleOnClickBtns = (ev) => {
  handleOnRemove(ev);
  handleOnUpdate(ev);
};

tbody.addEventListener("click", handleOnClickBtns);

function TableRow({ id, movieName, releaseDate, rate, price }) {
  return `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        ${movieName}
      </th>
      <td class="px-6 py-4">${formatDate(releaseDate)}</td>
      <td class="px-6 py-4">${rate}</td>
      <td class="px-6 py-4">$${price}</td>
      <td class="py-4 inline-flex gap-x-2">
        <button
          data-user-id="${id}"
          class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
        >
          Remove
        </button>
        <button
          data-edit-id="${id}"
          class="block text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          type="button"
        >
          Update
        </button>
      </td>
    </tr>
  `;
}

export function RenderMoviesTable() {
  let html = "";
  const movies = getMovies();
  for (const movie of movies) {
    html += TableRow(movie);
  }
  tbody.innerHTML = html;
}

RenderMoviesTable();
