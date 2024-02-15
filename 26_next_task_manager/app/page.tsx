"use client";

import { TaskCard } from "@/components/task-card";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [todos, setTodos] = React.useState<Array<ITodo>>([]);

  const getTasksList = async () => {
    const response = await axios.get(
      `${process.env.serverUrl}/api/collections/todo/records`
    );
    setTodos(response.data.items);
  };

  React.useEffect(() => {
    getTasksList();
  }, []);

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
