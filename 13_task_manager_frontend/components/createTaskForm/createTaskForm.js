import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";
import { addTask } from "../../libs/tasksList";
import { renderInprogressList } from "../tasksList/inprogressList";
import { renderCompletedList } from "../tasksList/completedList";

const form = document.getElementById("createTaskForm");
const errorAlert = document.getElementById("createTaskError");
const successfullyAlert = document.getElementById("createTaskSuccessful");

const data = {};

form.addEventListener("input", function (ev) {
  data[ev.target.name] = ev.target.value;
  errorAlert.classList.add("hidden");
});

form.addEventListener("submit", async function (ev) {
  ev.preventDefault();
  try {
    const token = window.sessionStorage.getItem("token");
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/task",
      data,
      headers: { Authorization: token },
    });
    addTask(response.data);
    renderInprogressList();
    renderCompletedList();
    successfullyAlert.classList.remove("hidden");
    successfullyAlert.innerText = "Created";
    setTimeout(() => {
      successfullyAlert.classList.add("hidden");
    }, 4000);
  } catch (error) {
    const html = errorHandler(error);
    errorAlert.classList.remove("hidden");
    errorAlert.innerHTML = html;
  }
});
