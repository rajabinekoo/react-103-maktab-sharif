import axios from "axios";
import { errorHandler } from "../../libs/errorHandler";
import { removeTask } from "../../libs/tasksList";
import { renderCompletedList } from "./completedList";
import { renderInprogressList } from "./inprogressList";

const inprogressList = document.getElementById("inprogressListBody");
const completedList = document.getElementById("completedListBody");

const removeBtnHandler = async (ev) => {
  if (ev.target.dataset.btnAction !== "remove") return;
  const id = ev.target.dataset.taskId;
  try {
    await axios({
      method: "delete",
      url: `http://localhost:3000/task/${id}`,
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    });
    removeTask(id);
    renderInprogressList();
    renderCompletedList();
  } catch (error) {
    errorHandler(error);
  }
};

inprogressList.addEventListener("click", removeBtnHandler);
completedList.addEventListener("click", removeBtnHandler);
