import React from "react";

interface ICardProps {
  title: string;
  price: number | string;
  listTitle: string;
  list: Array<React.JSX.Element>;
}
export const Card: React.FC<ICardProps> = ({
  title,
  price,
  list,
  listTitle,
}) => {
  return (
    <div className="bg-white shadow-xl w-96 py-5 px-7 flex flex-wrap">
      <div className="w-full">
        <p className="text-lg font-medium">{title}</p>
        <p className="text-lg font-medium">
          <span className="text-slate-500 text-3xl">$</span>
          <span className="text-5xl font-playfair font-semibold">{price}</span>
          <span className="text-slate-400 text-sm">/mo</span>
        </p>
        <p className="text-slate-600 mt-4">
          Better insights for growing businesses that want more customers.
        </p>
        <hr className="my-4" />
        <p className="font-medium">{listTitle}:</p>
        <div className="mt-3 grid grid-cols-1 gap-y-3">{list}</div>
      </div>
      <div className="mt-6 self-end w-full">
        <button className="bg-blue-500 w-full py-2 hover:bg-blue-600">
          <p className="text-white font-semibold">Start free trial</p>
        </button>
      </div>
    </div>
  );
};
