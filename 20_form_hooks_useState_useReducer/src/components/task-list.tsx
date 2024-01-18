import React from "react";
import { Task } from "../utils/types";
import { classnames } from "../utils/tools";

type props = {
  list?: Task[];
  removeTask: (_: string) => void;
  editTask: (_: string) => void;
};
export const TaskList: React.FC<props> = ({
  list = [],
  removeTask,
  editTask,
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {list.map((item, index) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                        {item.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {item.description}
                      </td>
                      <td
                        className={classnames(
                          "w-full whitespace-nowrap px-3 py-4 text-sm",
                          "text-gray-500 inline-flex gap-x-4 justify-end"
                        )}
                      >
                        <button
                          type="button"
                          className={classnames(
                            "text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500",
                            "text-base font-medium rounded-md",
                            "px-4 py-2 border border-transparent",
                            "focus:outline-none focus:ring-2 focus:ring-offset-2"
                          )}
                          onClick={editTask.bind({}, item.id)}
                        >
                          <p className="text-center">Update</p>
                        </button>

                        <button
                          type="button"
                          className={classnames(
                            "text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500",
                            "text-base font-medium rounded-md",
                            "px-4 py-2 border border-transparent",
                            "focus:outline-none focus:ring-2 focus:ring-offset-2"
                          )}
                          // onClick={() => removeTask(item.id)}
                          onClick={removeTask.bind({}, item.id)}
                        >
                          <p className="text-center">Remove</p>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
