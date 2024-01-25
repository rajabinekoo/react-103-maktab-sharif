import { useMemo } from "react";
import { ITodo, filterTodos, tabType } from "./utils";

export type themeType = "dark" | "light";
type props = { todos: ITodo[]; theme: themeType; tab: tabType };
export default function TodoList({ todos, theme, tab }: props) {
  //   const [visibleTodos, setVisibleTodos] = useState<ITodo[]>([]);
  //   useEffect(() => {
  //     setVisibleTodos(filterTodos(todos, tab));
  //   }, [todos, tab]);

  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab]);

  //   call by every theme state changes
  //   const visibleTodos = filterTodos(todos, tab);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
