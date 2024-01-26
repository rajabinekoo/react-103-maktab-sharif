import { IComment } from "../apis/post-api";

type props = { comment: IComment };
export const Comment: React.FC<props> = ({ comment }) => {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="flex space-x-3 items-center">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={comment.userData?.image}
            alt=""
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900 hover:underline">
            {comment.userData?.firstName} {comment.userData?.lastName}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 my-4">{comment.body}</p>
    </div>
  );
};
