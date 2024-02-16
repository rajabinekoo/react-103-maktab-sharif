export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import { TaskCard } from "@/components/task-card";

async function fetchTodos(): Promise<ITodo[]> {
  const response = await fetch(
    `${process.env.serverUrl}/api/collections/todo/records`,
    // { cache: "no-store" }
    { next: { revalidate: 0 } }
  );
  if (!response.ok) throw new Error("Something went wrong");
  return (await response.json())?.items;
}

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <main className="container mx-auto my-20 px-10 md:px-0">
      <div className="inline-flex justify-between w-full items-center">
        <p className="text-2xl font-semibold mb-6">Tasks</p>
        <Link href="/create">
          <button className="font-semibold text-white bg-blue-700 rounded-xl px-5 py-2 hover:bg-blue-900">
            New
          </button>
        </Link>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {todos.map((el) => (
          <TaskCard {...el} key={el.id} />
        ))}
      </section>
    </main>
  );
}
