import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  RegistrationForm,
  registrationFormSchema,
} from "../libs/validations/registration-form";
import { Input } from "../components/input";
import { ILoginReq, login } from "../apis/auth-service";
import { AppError, errorHandler } from "../libs/tools";
import { setSessionToken } from "../libs/sessionManager";

export function LoginPage() {
  const { handleSubmit, formState, control } = useForm<RegistrationForm>({
    mode: "all",
    resolver: zodResolver(registrationFormSchema),
  });
  const signin = useMutation({ mutationFn: login });
  const nav = useNavigate();

  const onSubmitHandler = async (data: RegistrationForm) => {
    const body: ILoginReq = {
      username: data.username,
      password: data.password,
    };
    signin.mutate(body);
  };

  const success = () => {
    setSessionToken(signin.data?.token || "");
    toast.success("Logged in successfully", { position: "bottom-right" });
    nav("/list");
  };

  useEffect(() => {
    if (!signin.isSuccess) return;
    success();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signin.isSuccess]);

  useEffect(() => {
    if (!signin.isError) return;
    errorHandler(signin.error as AppError);
  }, [signin.isError, signin.error]);

  return (
    <>
      <div className="container mx-auto flex justify-center py-32">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="bg-white rounded-xl shadow-md w-6/12 py-6 px-8"
        >
          <div className="w-full">
            <p className="text-xl font-semibold text-center">Login</p>

            <div className="mt-6">
              <Controller
                render={({ field }) => (
                  <Input
                    type="text"
                    id="username"
                    label="Username"
                    error={formState.errors.username}
                    {...field}
                  />
                )}
                control={control}
                name="username"
              />
            </div>

            <div className="mt-6">
              <Controller
                render={({ field }) => (
                  <Input
                    type="password"
                    id="password"
                    label="Password"
                    error={formState.errors.password}
                    {...field}
                  />
                )}
                control={control}
                name="password"
              />
            </div>

            <div className="mt-6">
              <Controller
                render={({ field }) => (
                  <Input
                    type="password"
                    id="repeatPassword"
                    label="Repeat Password"
                    error={formState.errors.repeatPassword}
                    {...field}
                  />
                )}
                control={control}
                name="repeatPassword"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <span className="font-semibold">Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
