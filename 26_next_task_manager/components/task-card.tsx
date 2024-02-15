import Link from "next/link";

export const TaskCard: React.FC<ITodo> = ({ title, description }) => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="w-full mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="w-full mb-3 font-normal text-gray-700">{description}</p>
      <div className="w-full self-end">
        <Link
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
