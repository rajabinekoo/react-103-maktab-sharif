import React from "react";
import { FieldError } from "react-hook-form";
import { classNames } from "../libs/tools";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label: string
}

export const Input: React.FC<InputProps> = ({ error, label, ...props }) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        className={classNames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm",
          "rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
          !error?.message ? "" : "border-red-600"
        )}
        {...props}
      />
      <p className="pt-1 text-xs font-semibold text-red-600">
        {error?.message}
      </p>
    </>
  );
};
