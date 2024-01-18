import { ChangeEventHandler, useReducer, useState } from "react";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";
import { Task } from "../utils/types";

interface ITaskAction {
  type: "create" | "update" | "remove";
  payload: Task;
}

// arg0: state
// arg1: action
const tasksReducer = (state: Task[], action: ITaskAction) => {
  if (action.type === "create") {
    // if (state.find((el) => el.id === action.payload.id)) return state;
    state.push(action.payload);
  } else if (action.type === "remove") {
    state = state.filter((el) => el.id !== action.payload.id);
  } else if (action.type === "update") {
    state = state.map((el) => {
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
  const [targetId, setTargetId] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    const valueArray = value.split("");
    let isValid = false;
    for (const char of valueArray) {
      if (isNaN(Number(char))) {
        isValid = true;
      }
    }

    if (isValid || value.length === 0) setDescription(e.target.value);
  };

  const saveTask = () => {
    if (Boolean(targetId)) {
      dispatch({
        type: "update",
        payload: { id: targetId as string, title, description },
      });
    } else {
      dispatch({
        type: "create",
        payload: new Task(title, description),
      });
      setTitle("");
      setDescription("");
    }
  };

  const removeTask = (id: string) => {
    dispatch({
      type: "remove",
      payload: { id, title: "", description: "" },
    });
  };

  const editTask = (id: string) => {
    const task = tasksList.find((el) => el.id === id);
    setTargetId(task?.id);
    setTitle(task?.title || "");
    setDescription(task?.description || "");
  };

  const changeToCreationForm = () => {
    setTargetId(undefined);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-24">
      <TaskForm
        saveTask={saveTask}
        title={title}
        description={description}
        onChangeDescription={onChangeDescription}
        onChangeTitle={onChangeTitle}
        changeToCreationForm={changeToCreationForm}
        editMode={Boolean(targetId)}
      />
      <TaskList list={tasksList} removeTask={removeTask} editTask={editTask} />
    </div>
  );
};
