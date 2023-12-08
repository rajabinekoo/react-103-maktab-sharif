import { formatDate } from "/libs/utils/formatDate";
import { getMovies } from "/libs/moviesList";

const tbody = document.getElementById("movies-list-tbody");
let movies = getMovies();

function TableRow({ movieName, releaseDate, rate, price }) {
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
    </tr>
    `;
}

function render() {
  let html = "";
  for (const movie of movies) {
    html += TableRow(movie);
  }
  tbody.innerHTML = html;
}

render();
