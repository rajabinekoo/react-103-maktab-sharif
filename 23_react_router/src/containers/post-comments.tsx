import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { IComment, fetchPostComments } from "../apis/post-api";
import { fetchUserById } from "../apis/user-api";
import { Comment } from "../components/comment";

export const PostCommentsContainer = () => {
  const comments = useLoaderData() as IComment[];

  return <div className="border-t pt-3">
    <p className="pl-6 text-sm text-gray-500">Comments:</p>
    {comments.map(el => <Comment key={el.id} comment={el}/>)}
  </div>;
};

export const postCommentsContainerLoader = async (data: LoaderFunctionArgs) => {
  let comments = await fetchPostComments(Number(data.params.postId));
  comments = await Promise.all(
    comments.map(async (el) => {
      return {
        ...el,
        userData: await fetchUserById(el.user.id),
      };
    })
  );
  return comments;
};
