import axios from "axios";
import { errorHandler } from "./errorHandler";

let tasks;

export async function fetchUserTasks() {
  if (!!tasks) return tasks;

  const token = window.sessionStorage.getItem("token");
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/task",
      headers: { Authorization: `Bearer ${token}` },
    });
    tasks = response.data;
    return tasks;
  } catch (error) {
    errorHandler(error);
  }
}

export function addTask(createdTask) {
  if (Array.isArray(tasks)) tasks.push(createdTask);
  else tasks = [createdTask];
}
