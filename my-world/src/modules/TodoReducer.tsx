export type Todo = {
  id: number;
  text: string;
};

export type Todos = Todo[];

let nextId = 1;
const ADD_TODO = "add todo into todo list" as const;
const DEL_TODO = "delete todo from todo list" as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});
export const delTodo = (id: number) => ({
  type: DEL_TODO,
  payload: id,
});

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof delTodo>;

const initialState: Todos = [];

export function TodoReducer(
  state: Todos = initialState,
  action: TodoAction
): Todos {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
      });
    case DEL_TODO:
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}
