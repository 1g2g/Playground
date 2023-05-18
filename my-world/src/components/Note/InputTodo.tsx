import { useRef } from "react";

type InputTodoProps = {
  add: (text: string) => void;
};

export const InputTodo = ({ add }: InputTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const saveTodo = () => {
    if (inputRef.current !== null) add(inputRef.current.value);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="input-todo">
      <form onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} />
        <button onClick={saveTodo}>저장</button>
      </form>
    </div>
  );
};
