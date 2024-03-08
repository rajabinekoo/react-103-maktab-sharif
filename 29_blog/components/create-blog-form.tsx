"use client";

import { useState } from "react";

export const CreateBlogForm: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [values, setValues] = useState<IBlog>({
    title: "",
    body: "",
    tag: "",
  });

  const handleOnChange = (key: keyof IBlog, newValue: string) => {
    const valuesInstance = { ...values };
    valuesInstance[key] = newValue;
    setValues(valuesInstance);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return alert("file required");

    const formData = new FormData();
    formData.set("title", values.title);
    formData.set("tag", values.tag);
    formData.set("body", values.body);
    formData.set("banner", file);

    try {
      await fetch("/api/blogs", { method: "POST", body: formData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full block p-6 bg-white border border-gray-200 rounded-lg shadow">
      <form onSubmit={onSubmit} className="mx-auto w-full">
        <div className="mb-5">
          <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        </div>
        <div className="mb-5">
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
            required
            onChange={(e) => handleOnChange("title", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tag"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tag
          </label>
          <input
            type="text"
            id="tag"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={(e) => handleOnChange("tag", e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="body"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Body
          </label>
          <textarea
            id="body"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={(e) => handleOnChange("body", e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Create
        </button>
      </form>
    </div>
  );
};
