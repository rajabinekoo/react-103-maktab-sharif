import { useRouteError } from "react-router-dom";
import { IServerError } from "../utils/types";

export function ErrorBoundary() {
  let error = useRouteError() as IServerError;
  return <div className="p-5">
    <p>Server error</p>
    <p>{error.message}</p>
  </div>;
}
