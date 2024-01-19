import { useEffect, useState } from "react";
import { Post, PostSkeleton } from "../components/post";
import { IPost, fetchPosts } from "../apis/post-api";
import { fetchUserById } from "../apis/user-api";

export const PostListWithLoader = () => {
  const [postsList, setPostsList] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    let posts: IPost[] = await fetchPosts();
    posts = await Promise.all(
      posts.map(async (pst) => ({
        ...pst,
        user: await fetchUserById(pst.userId),
      }))
    );
    setPostsList(posts);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) return;
    fetchData();
  }, [loading]);

  return (
    <section className="bg-slate-200 py-20">
      <div className="container mx-auto flex flex-col items-center px-4 gap-y-6">
        <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
          <h1 className="text-3xl font-bold">Posts</h1>
        </div>
        {loading && (
          <>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
            <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
              <PostSkeleton />
            </div>
          </>
        )}
        {postsList.map((el, index) => (
          <div
            key={index}
            className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full"
          >
            <Post post={el} />
          </div>
        ))}
      </div>
    </section>
  );
};
