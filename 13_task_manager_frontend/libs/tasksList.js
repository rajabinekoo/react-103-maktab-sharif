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

export function removeTask(id) {
  tasks = tasks.filter((el) => el.id !== id);
}

export async function getInprogressTasks() {
  const list = await fetchUserTasks();
  if (!list) return [];
  return list.filter((el) => !el.isCompleted);
}

export async function getCompletedTasks() {
  const list = await fetchUserTasks();
  if (!list) return [];
  return list.filter((el) => el.isCompleted);
}
