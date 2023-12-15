import { getInprogressTasks } from "../../libs/tasksList";
import { TaskCard } from "./taskCard";

const list = document.getElementById("inprogressListBody");

async function main() {
  const tasks = await getInprogressTasks();
  let html = "";
  for (const task of tasks) {
    html += TaskCard(task);
  }
  list.innerHTML = html;
}

main();
