import React from "react";
import { useSubmitFormValues } from "../hooks/submit-form-hook";

export const ContactForm: React.FC = () => {
  const { username, email, password, repeatPassword, onChangeInputs } =
    useSubmitFormValues();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, email, password, repeatPassword });
  };

  return (
    <section className="flex justify-center pt-20">
      <form
        className="w-3/12 shadow-xl p-6 rounded-xl border"
        onSubmit={onSubmit}
      >
        <p className="text-2xl text-center mb-6">Registration</p>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="username"
              onChange={onChangeInputs("username")}
              value={username}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
              onChange={onChangeInputs("email")}
              value={email}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="password"
              onChange={onChangeInputs("password")}
              value={password}
            />
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="repeat-password"
            className="block text-sm font-medium text-gray-700"
          >
            Repeat Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              name="repeat-password"
              id="repeat-password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="repeat password"
              onChange={onChangeInputs("repeatPassword")}
              value={repeatPassword}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <p className="text-center">Submit</p>
        </button>
      </form>
    </section>
  );
};
