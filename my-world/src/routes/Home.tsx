import { TaskBar } from "components/Taskbar/TaskBar";
import { Background } from "components/Square/Background";
import "routes/layout.scss";
import { Welcome } from "components/Welcome/Welcome";
export const Home = () => {
  return (
    <main className="layout">
      <Background />
      <TaskBar />
      <Welcome />
    </main>
  );
};
