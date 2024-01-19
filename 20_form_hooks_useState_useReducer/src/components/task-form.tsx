import React, { ChangeEventHandler, useEffect, useState } from "react";
import { classnames } from "../utils/tools";
import { ITask, ITaskForm } from "../utils/types";

type props = {
  saveTask: (_: ITaskForm) => void;
  changeToCreationForm?: () => void;
  targetTask?: ITask;
};
export const TaskForm: React.FC<props> = ({
  changeToCreationForm,
  saveTask,
  targetTask,
}) => {
  const [errors, setErrors] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });
  const [formValues, setFormValues] = useState<ITaskForm>({
    title: "",
    description: "",
  });
  const editMode = Boolean(targetTask);

  const onChangeForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    if (formValues.title.length < 3) {
      const newErrors = { ...errors };
      newErrors.title = "Title must be more then or equal 3 characters";
      setErrors(newErrors);
      isValid = false;
    }
    if (formValues.description.length < 5) {
      const newErrors = { ...errors };
      newErrors.description =
        "Description must be more then or equal 5 characters";
      setErrors(newErrors);
      isValid = false;
    }
    if (!isValid) return;
    setErrors({ title: "", description: "" });
    saveTask(formValues);
    if (!editMode) {
      setFormValues({ title: "", description: "" });
    }
  };

  useEffect(() => {
    if (!targetTask) {
      setFormValues({
        title: "",
        description: "",
      });
    } else {
      setFormValues({
        title: targetTask.title,
        description: targetTask.description,
      });
    }
  }, [targetTask]);

  return (
    <section className="flex justify-center pt-20 px-6">
      <form
        className="2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-10/12 w-full shadow-xl p-6 rounded-xl border"
        onSubmit={onSubmit}
      >
        <p className="text-2xl text-center mb-6">
          {editMode ? "Task Update" : "Task Creation"}
        </p>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="title"
              id="title"
              className={classnames(
                "shadow-sm focus:ring-indigo-500 focus:border-indigo-500",
                "block w-full sm:text-sm rounded-md",
                !!errors.title ? "border-red-400" : "border-gray-300"
              )}
              placeholder="title"
              onChange={onChangeForm}
              value={formValues.title}
            />
            {!!errors.title && (
              <p className="text-red-500 text-sm mt-2">{errors.title}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="description"
              id="description"
              className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm ${
                !!errors.description ? "border-red-400" : "border-gray-300"
              } rounded-md`}
              placeholder="description"
              onChange={onChangeForm}
              value={formValues.description}
            />
            {!!errors.description && (
              <p className="text-red-500 text-sm mt-2">{errors.description}</p>
            )}
          </div>
        </div>
        <div className={editMode ? "hidden" : "block"}>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <p className="text-center">Submit</p>
          </button>
        </div>
        <div className={editMode ? "block" : "hidden"}>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            <p className="text-center">Update</p>
          </button>

          <button
            onClick={changeToCreationForm}
            type="button"
            className="w-full mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <p className="text-center">Cancel</p>
          </button>
        </div>
      </form>
    </section>
  );
};
