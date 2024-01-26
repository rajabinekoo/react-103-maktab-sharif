import {
  Link,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from "react-router-dom";
import { IPost, fetchPostInfo } from "../apis/post-api";
import { Post } from "../components/post";
import { fetchUserById } from "../apis/user-api";

export const PostPage = () => {
  const post = useLoaderData() as IPost;

  return (
    <div className="mx-auto px-2 max-w-lg my-8">
      <div className="bg-white pb-2">
        <Post post={post} disableShowMore={true} />
        {!window.location.pathname.includes("comments") && (
          <Link to={`/posts/${post.id}/comments`}>
            <span className="text-sm ml-4 text-gray-500 hover:underline hover:cursor-pointer">
              Show comments ...
            </span>
          </Link>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export const postPageLoader = async (data: LoaderFunctionArgs) => {
  const post = await fetchPostInfo(Number(data.params.postId));
  post.user = await fetchUserById(post.userId);
  return post;
};
