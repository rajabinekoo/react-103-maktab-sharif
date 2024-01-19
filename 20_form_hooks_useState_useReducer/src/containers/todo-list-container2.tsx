import { useReducer, useState } from "react";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";
import { ITask, ITaskForm } from "../utils/types";
import { v4 as uuidV4 } from "uuid";

interface ITaskAction {
  type: "create" | "update" | "remove";
  payload: ITask;
}

// arg0: state
// arg1: action
const tasksReducer = (state: ITask[], action: ITaskAction) => {
  if (action.type === "create") {
    const newState = [...state];
    newState.push(action.payload);
    return newState;
  } else if (action.type === "remove") {
    return state.filter((el) => el.id !== action.payload.id);
  } else if (action.type === "update") {
    return state.map((el) => {
      if (el.id === action.payload.id) {
        return action.payload;
      }
      return el;
    });
  }
  return state;
};

export const TodoListContainer2 = () => {
  const [tasksList, dispatch] = useReducer(tasksReducer, []);
  const [targetTask, setTargetTask] = useState<ITask>();

  const saveTask = (formValues: ITaskForm) => {
    if (Boolean(targetTask)) {
      dispatch({
        type: "update",
        payload: { id: targetTask?.id as string, ...formValues },
      });
    } else {
      const newTask: ITask = { ...formValues, id: uuidV4() };
      dispatch({
        type: "create",
        payload: newTask,
      });
    }
  };

  const removeTask = (id: string) => {
    dispatch({
      type: "remove",
      payload: { id, title: "", description: "" },
    });
  };

  const editTask = (id: string) => {
    setTargetTask(tasksList.find((el) => el.id === id));
  };

  const changeToCreationForm = () => {
    setTargetTask(undefined);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-24">
      <TaskForm
        saveTask={saveTask}
        changeToCreationForm={changeToCreationForm}
        targetTask={targetTask}
      />
      <TaskList list={tasksList} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};
