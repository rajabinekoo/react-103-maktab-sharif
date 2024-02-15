"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateTaskSchema,
  CreateTaskType,
} from "@/utils/validations/create-task-validation";
import { useRouter } from "next/navigation";
import { createTask } from "@/actions/create-task-action";
// import axios from "axios";

export const TaskCreationForm: React.FC = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateTaskType>({
    resolver: zodResolver(CreateTaskSchema),
  });

  const submit = async (data: CreateTaskType) => {
    await createTask(data);
    // await axios.post("/api/task", data)
    router.push("/");
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <form onSubmit={handleSubmit(submit)} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900">Task creation</h5>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="enter title"
            {...register("title")}
          />
          {!!errors.title?.message && (
            <p className="text-red-600 text-xs font-semibold mt-0.5">
              {errors.title.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="enter description"
            {...register("description")}
          />
          {!!errors.description?.message && (
            <p className="text-red-600 text-xs font-semibold mt-0.5">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="isCompleted"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                {...register("isCompleted")}
              />
            </div>
            <label
              htmlFor="isCompleted"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Completed
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Create task
        </button>
      </form>
    </div>
  );
};
