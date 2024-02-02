import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ITask } from "../libs/types";
import { createTask, removeTask, updateTask } from "../redux/task-slice";
import styles from "./task-manager.module.css";

const Task: React.FC<
  ITask & {
    handleRemove: (id: string) => void;
    handleUpdate: (id: string) => void;
  }
> = ({ id, title, description, handleRemove, handleUpdate }) => {
  return (
    <div className={styles.taskItem}>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <button onClick={handleRemove.bind({}, id as string)}>Remove</button>
      <button onClick={handleUpdate.bind({}, id as string)}>Update</button>
    </div>
  );
};

const filter = (searchText: string) => {
  return (state: any) =>
    !searchText
      ? state.tasks.list
      : state.tasks.list.filter((el: ITask) => el.title.includes(searchText));
};

export const TaskManager: React.FC = () => {
  const [targetTask, setTargetTask] = useState<ITask | undefined>(undefined);
  const [search, setSearch] = useState<string>("");
  const taskList = useAppSelector(filter(search));
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ITask>();

  const onSubmit = (data: ITask) => {
    try {
      if (!targetTask) {
        dispatch(createTask(data));
      } else {
        dispatch(updateTask({ id: targetTask.id, ...data }));
        setTargetTask(undefined);
      }
      reset();
    } catch (error) {
      const e: Error = error as Error;
      alert(e.message);
    }
  };

  const onRemove = (id: string) => {
    dispatch(removeTask({ id }));
  };

  const onCancel = () => {
    setTargetTask(undefined);
    reset();
  };

  const editMode = (id: string) => {
    const task = taskList.find((el: ITask) => el.id === id);
    setTargetTask(task);
    setValue("title", task?.title || "");
    setValue("description", task?.description || "");
  };

  return (
    <>
      <h2>Task Manager</h2>
      <input onChange={(e) => setSearch(e.target.value)} />
      <div>
        <h3>{!targetTask ? "Create" : "Update"} Task</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Title:</label>
            <br />
            <input {...register("title", { required: "* Required" })} />
            <p className={styles.danger}>{errors.title?.message}</p>
          </div>
          <div>
            <label>Description:</label>
            <br />
            <textarea
              {...register("description", { required: "* Required" })}
            />
            <p className={styles.danger}>{errors.description?.message}</p>
          </div>
          <button type="submit">Submit</button>
          {!!targetTask && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </form>
      </div>
      <hr />
      <div className={styles.listWrapper}>
        {taskList.map((el: ITask) => (
          <Task
            key={el.id}
            {...el}
            handleRemove={onRemove}
            handleUpdate={editMode}
          />
        ))}
      </div>
    </>
  );
};
