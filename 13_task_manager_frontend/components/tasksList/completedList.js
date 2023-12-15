import axios from "axios";
import { getCompletedTasks, undone } from "../../libs/tasksList";
import { TaskCard } from "./taskCard";
import { renderInprogressList } from "./inprogressList";
import { errorHandler } from "../../libs/errorHandler";

const list = document.getElementById("completedListBody");

const undoneBtnHandler = async (ev) => {
  if (ev.target.dataset.btnAction !== "undone") return;
  const id = ev.target.dataset.taskId;
  try {
    await axios({
      method: "patch",
      url: `http://localhost:3000/task/inprogress/${id}`,
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    undone(id);
    renderCompletedList();
    renderInprogressList();
  } catch (error) {
    errorHandler(error);
  }
};

list.addEventListener("click", undoneBtnHandler);

export async function renderCompletedList() {
  const tasks = await getCompletedTasks();
  let html = "";
  for (const task of tasks) {
    html += TaskCard(task, true);
  }
  list.innerHTML = html;
}
renderCompletedList();
