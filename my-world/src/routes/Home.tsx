import { TaskBar } from "components/Taskbar/TaskBar";
import { Background } from "components/Square/Background";
import "routes/layout.scss";
export const Home = () => {
  return (
    <main className="layout">
      <Background />
      <TaskBar />
    </main>
  );
};
