import { RenderMoviesTable } from "../movies";
import { findMovieById, updateMovie } from "/libs/moviesList";

// elements
const form = document.getElementById("update-form");
const closeBtn = document.getElementById("update-movie-modal-close-btn");
const inputs = document.querySelectorAll("#update-form input");

// states
let values = {};

// handlers
const resetStates = () => {
  values = {};
};

const clear = () => {
  for (const changedElement of inputs) {
    changedElement.value = "";
  }
};

const onSubmitHandler = (ev) => {
  ev.preventDefault();
  updateMovie(values);
  RenderMoviesTable();
  closeBtn.click();
  clear();
  resetStates();
};

const onChange = (ev) => {
  values[ev.target.name] = ev.target.value;
};

// events
form.addEventListener("submit", onSubmitHandler);
form.addEventListener("input", onChange);

export function editMovie(id) {
  const toggleBtn = document.getElementById("update-movie-modal-toggle-btn");
  toggleBtn.click();
  const targetMovie = findMovieById(Number(id));
  if (!targetMovie) return toggleBtn.click();
  values = { ...targetMovie };
  for (const input of inputs) {
    input.value = values[input.name];
  }
}
