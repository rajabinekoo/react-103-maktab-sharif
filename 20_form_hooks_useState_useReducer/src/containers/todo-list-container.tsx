import { ChangeEventHandler, useState } from "react";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";
import { Task } from "../utils/types";

export const TodoListContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
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
      setTasksList(
        tasksList.map((el) => {
          if (el.id === targetId) {
            return { id: el.id, title, description };
          }
          return el;
        })
      );
    } else {
      const newTasksList = [...tasksList];
      newTasksList.push(new Task(title, description));
      setTasksList(newTasksList);
      setTitle("");
      setDescription("");
    }
  };

  const removeTask = (id: string) => {
    setTasksList(tasksList.filter((el) => el.id !== id));
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
