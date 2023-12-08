import { RenderMoviesTable } from "../movies";
import { addMovie, getLastId, increamentLastId } from "/libs/moviesList";

// elements
const form = document.getElementById("creation-form");
const closeBtn = document.getElementById("create-movie-modal-close-btn");

// states
let values = {
  id: getLastId(),
};
let changedElements = [];

// handlers
const resetStates = () => {
  values = {
    id: getLastId(),
  };
  changedElements = [];
};

const clear = () => {
  for (const changedElement of changedElements) {
    changedElement.value = "";
  }
};

const onSubmitHandler = (ev) => {
  ev.preventDefault();
  addMovie(values);
  increamentLastId();
  RenderMoviesTable();
  closeBtn.click();
  clear();
  resetStates();
};

const onChange = (ev) => {
  if (!values[ev.target.name]) changedElements.push(ev.target);
  values[ev.target.name] = ev.target.value;
};

// events
form.addEventListener("submit", onSubmitHandler);
form.addEventListener("input", onChange);
