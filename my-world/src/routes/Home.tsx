import { TaskBar } from "components/Taskbar/TaskBar";
import { TodoApp } from "components/Todo/TodoApp";
export const Home = () => {
  return (
    <div>
      <TodoApp />
      <TaskBar />
    </div>
  );
};
