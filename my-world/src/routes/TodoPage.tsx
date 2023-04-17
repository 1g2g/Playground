import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules/index";
import { TodoList } from "components/TodoList";
import { InputTodo } from "components/InputTodo";
import { addTodo, delTodo } from "modules/TodoReducer";
export const TodoPage = () => {
  const todoLists = useSelector((state: RootState) => state.TodoReducer);
  const dispatch = useDispatch();

  const add = (text: string) => {
    dispatch(addTodo(text));
  };
  const del = (id: number) => {
    dispatch(delTodo(id));
  };
  return (
    <>
      <InputTodo add={add} />
      <TodoList todoLists={todoLists} del={del} />
    </>
  );
};
