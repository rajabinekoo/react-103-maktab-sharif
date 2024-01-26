import { PostListContainer } from "../containers/post-list";

export const PostsPage = () => {
  return (
    <section className="bg-slate-200 py-20">
      <div className="container mx-auto flex flex-col items-center px-4 gap-y-6">
        <div className="xl:w-6/12 lg:w-8/12 md:w-9/12 sm:w-11/12 w-full">
          <h1 className="text-3xl font-bold">Posts</h1>
        </div>
        <PostListContainer />
      </div>
    </section>
  );
};
