import { useState } from "react";
import { Timer } from "../components/timer";

export const TimeContainer = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      {display && <Timer />}
      <div>
        <button
          className="bg-indigo-300 border rounded px-4 py-1"
          onClick={() => setDisplay(!display)}
        >
          toggle display timer
        </button>
      </div>
    </>
  );
};
