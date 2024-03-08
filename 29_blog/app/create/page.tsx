import { CreateBlogForm } from "@/components/create-blog-form";

export default function Create() {
  return (
    <main className="container mx-auto">
      <section className="w-full flex flex-wrap justify-center">
        <div className="xl:w-5/12 lg:w-7/12 md:w-9/12 sm:w-11/12 w-full space-y-6 py-20 px-6 sm:px-0">
          <p className="text-3xl">Create a blog</p>
          <CreateBlogForm />
        </div>
      </section>
    </main>
  );
}
