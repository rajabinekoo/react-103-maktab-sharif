"use client";

import React from "react";
import { classNames } from "@/utils/tools";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  labelTitle?: string;
  error?: string;
}

export const TextInput: React.FC<ITextInput> = ({
  labelTitle,
  error,
  ...props
}) => {
  const id = React.useMemo(() => {
    return crypto.randomUUID();
  }, []);

  return (
    <div>
      {!!labelTitle && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-700"
        >
          {labelTitle}
        </label>
      )}
      <div className="mt-0.5">
        <input
          id={id}
          className={
            !!props.className
              ? props.className
              : classNames(
                  !!error ? "ring-danger" : "ring-gray-300",
                  "block w-full rounded-md border-0 py-1.5 text-gray-900",
                  "shadow-sm ring-1 ring-inset placeholder:text-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                )
          }
          {...props}
        />
        {!!error && <p className="text-danger text-sm pt-xs">{error}</p>}
      </div>
    </div>
  );
};
