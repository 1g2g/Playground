import { Todo } from "modules/TodoReducer";
type TodoListProps = {
  todoLists: Todo[];
  del: (id: number) => void;
};
export const TodoList = ({ todoLists, del }: TodoListProps) => {
  const deleteTodo = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    del(Number(target.value));
  };
  return (
    <ul>
      {todoLists.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={deleteTodo} value={todo.id}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
