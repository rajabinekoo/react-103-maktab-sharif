"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput } from "@/components/inputs/textInput";
import { getUserByCredentials } from "@/pocketbase/users";
import { PrimaryContainedButton } from "@/components/buttons/contained-btns";
import {
  loginFormSchema,
  loginFormType,
} from "@/utils/validations/login-validation";
import { classNames } from "@/utils/tools";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const { handleSubmit, control: loginFormControl } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitLoginForm = async (data: loginFormType) => {
    if (loading) return;
    setLoading(true);
    const result = await getUserByCredentials(data.username, data.password);
    setError(result?.error || "");
    setLoading(false);
    if (result.data) {
      router.push("/admin");
    } else {
      router.push("/panel");
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center px-xs sm:px-0">
      <section className="shadow-card rounded-sm w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 py-24 px-14 bg-white">
        <div className="space-y-xs">
          <p className="text-primary-700 text-3xl">Hello,</p>
          <p className="text-primary-700 text-3xl">Welcome Back!</p>
        </div>
        <form onSubmit={handleSubmit(submitLoginForm)} className="mt-lg">
          <div className="space-y-md">
            <Controller
              name="username"
              control={loginFormControl}
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  placeholder="Enter your username"
                  error={error?.message}
                  labelTitle="Username"
                  type="text"
                  {...field}
                />
              )}
            />
            <Controller
              control={loginFormControl}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  placeholder="Enter your password"
                  labelTitle="Password"
                  type="password"
                  error={error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className="shadow-card rounded-md overflow-hidden mt-xl">
            <PrimaryContainedButton
              type="submit"
              title={<p className="font-semibold text-white">Login</p>}
              disabled={loading}
            />
          </div>
          <div
            className={classNames(
              !!error ? "block" : "hidden",
              "bg-red-50 ring-1 ring-red-300 text-red-600",
              "px-sm py-xs rounded-md mt-md"
            )}
          >
            {error}
          </div>
        </form>
      </section>
    </main>
  );
}
