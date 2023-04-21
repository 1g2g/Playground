import { Square } from "components/Square/Square";
import { TaskBar } from "components/Taskbar/TaskBar";
import { TodoApp } from "components/Todo/TodoApp";
export const Home = () => {
  return (
    <main>
      <Square />
      <TodoApp />
      <TaskBar />
    </main>
  );
};
