import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const classNames = (...classnames: string[]) => {
  return classnames.filter((el) => Boolean(el?.trim?.())).join(" ");
};

export type AppError = AxiosError<{
  message: string | string[];
  statusCode: number;
}>;
export const errorHandler = (error: AppError) => {
  console.log(error);

  const message = error.response?.data?.message;
  if (typeof message === "string") {
    toast.error(message, { position: "bottom-right" });
  } else if (
    Array.isArray(message) &&
    message?.length !== 0 &&
    typeof message[0] === "string"
  ) {
    for (const item of message) {
      toast.error(item, { position: "bottom-right" });
    }
  }
  if (error.response?.status === 403) {
    toast.error("Unauthorized", { position: "bottom-right" });
    window.location.href = "/";
  }
};
