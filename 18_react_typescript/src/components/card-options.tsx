import React from "react";
import { CheckIcon } from "./icons/check-icon";

interface ICardOptionsProps {
  text: string;
}
export const CardOptions: React.FC<ICardOptionsProps> = ({ text }) => {
  return (
    <div className="flex gap-x-3 items-center">
      <CheckIcon className="w-4 h-4 fill-[#10b981]" />
      <p className="text-slate-600">{text}</p>
    </div>
  );
};
