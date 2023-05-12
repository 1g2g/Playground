import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules/index";
import { TodoList } from "components/Note/TodoList";
import { InputTodo } from "components/Note/InputTodo";
import { addTodo, delTodo } from "modules/TodoReducer";
export const TodoApp = () => {
  const todoLists = useSelector((state: RootState) => state.TodoReducer);
  const dispatch = useDispatch();
  const add = (text: string) => {
    dispatch(addTodo(text));
  };
  const del = (id: number) => {
    dispatch(delTodo(id));
  };

  return (
    <div className="todo">
      <InputTodo add={add} />
      <TodoList todoLists={todoLists} del={del} />
    </div>
  );
};
