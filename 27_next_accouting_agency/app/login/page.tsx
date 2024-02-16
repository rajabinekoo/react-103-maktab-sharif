"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput } from "@/components/inputs/textInput";
import {
  loginFormSchema,
  loginFormType,
} from "@/utils/validations/login-validation";
import { PrimaryContainedButton } from "@/components/buttons/contained-btns";
import { getUserByCredentials } from "@/pocketbase/users";

export default function Login() {
  const { handleSubmit, control: loginFormControl } = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitLoginForm = async (data: loginFormType) => {
    console.log(data);
    const result = await getUserByCredentials(data.username, data.password);
    console.log(result);
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
            />
          </div>
        </form>
      </section>
    </main>
  );
}
