export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}
export type tabType = "all" | "active" | "completed";

export function createTodos(): ITodo[] {
  const todos: ITodo[] = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    } as ITodo);
  }
  return todos;
}

export function filterTodos(todos: ITodo[], tab: tabType) {
  console.log(
    "[ARTIFICIALLY SLOW] Filtering " +
      todos.length +
      ' todos for "' +
      tab +
      '" tab.'
  );

  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter((todo: ITodo) => {
    if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }
    return true;
  });
}
