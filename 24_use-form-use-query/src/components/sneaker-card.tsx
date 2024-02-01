import React from "react";
import { ISneakerRes } from "../apis/sneaker-service";

export const SneakersCard: React.FC<ISneakerRes> = ({
  imageURL,
  name,
  price,
  brand,
  category,
}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={imageURL} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          <p>${price}</p>
          <p>{brand}</p>
          <p>{category}</p>
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Buy
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
