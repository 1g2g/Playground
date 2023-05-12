import { Todos } from "modules/TodoReducer";
import { useState } from "react";

type TodoListProps = {
  todoLists: Todos;
  del: (id: number) => void;
};

export const TodoList = ({ todoLists, del }: TodoListProps) => {
  let initNum = 1;
  const [onMouseItem, setOnMouseItem] = useState<number | null>(null);

  const deleteTodo = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).parentElement as HTMLButtonElement;
    if (target) {
      del(Number(target.value));
    }
  };

  return (
    <ol className="todo-list">
      {todoLists.map((todo) => (
        <li key={todo.id}>
          <span>
            {initNum++}. {todo.text}
          </span>
          <button
            onClick={deleteTodo}
            value={todo.id}
            onMouseEnter={() => setOnMouseItem(todo.id)}
            onMouseLeave={() => setOnMouseItem(null)}
          >
            {onMouseItem === todo.id ? (
              <i className="bi bi-check2-square"></i>
            ) : (
              <i className="bi bi-app"></i>
            )}
          </button>
        </li>
      ))}
    </ol>
  );
};
