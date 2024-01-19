import { useState } from "react";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";
import { ITask, ITaskForm } from "../utils/types";
import { v4 as uuidV4 } from "uuid";

export const TodoListContainer = () => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [targetTask, setTargetTask] = useState<ITask>();

  const saveTask = (formValues: ITaskForm) => {
    if (Boolean(targetTask)) {
      setTasksList(
        tasksList.map((el) => {
          if (el.id === targetTask?.id) {
            return { id: el.id, ...formValues };
          }
          return el;
        })
      );
    } else {
      const newTasksList = [...tasksList];
      const newTask: ITask = { ...formValues, id: uuidV4() };
      newTasksList.push(newTask);
      setTasksList(newTasksList);
    }
  };

  const removeTask = (id: string) => {
    setTasksList(tasksList.filter((el) => el.id !== id));
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
