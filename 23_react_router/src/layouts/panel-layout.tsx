import { Outlet } from "react-router-dom";

export const PanelLayout = () => {
  return (
    <div className="flex">
      <div className="w-4/12 px-2">
        <div className="bg-white">
          <p>hello</p>
        </div>
      </div>

      <div className="w-8/12">
        <Outlet />
      </div>
    </div>
  );
};
