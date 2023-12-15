import { getCompletedTasks } from "../../libs/tasksList";
import { TaskCard } from "./taskCard";

const list = document.getElementById("completedListBody");

async function main() {
  const tasks = await getCompletedTasks();
  let html = "";
  for (const task of tasks) {
    html += TaskCard(task, true);
  }
  list.innerHTML = html;
}

main();
