import axios from "axios";
import { done, getInprogressTasks } from "../../libs/tasksList";
import { TaskCard } from "./taskCard";
import { errorHandler } from "../../libs/errorHandler";
import { renderCompletedList } from "./completedList";

const list = document.getElementById("inprogressListBody");

const doneBtnHandler = async (ev) => {
  if (ev.target.dataset.btnAction !== "done") return;
  const id = ev.target.dataset.taskId;
  try {
    await axios({
      method: "patch",
      url: `http://localhost:3000/task/done/${id}`,
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    done(id);
    renderInprogressList();
    renderCompletedList();
  } catch (error) {
    errorHandler(error);
  }
};

list.addEventListener("click", doneBtnHandler);

export async function renderInprogressList() {
  const tasks = await getInprogressTasks();
  let html = "";
  for (const task of tasks) {
    html += TaskCard(task);
  }
  list.innerHTML = html;
}
renderInprogressList();
