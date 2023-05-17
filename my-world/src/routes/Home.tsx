import { TaskBar } from "components/Taskbar/TaskBar";
import { Background } from "components/Square/Background";
import "routes/layout.scss";
import { Welcome } from "components/Welcome/Welcome";
import { TopBar } from "components/Taskbar/TopBar";
import { Mobile } from "utils/MediaQuery";

export const Home = () => {
  return (
    <main className="layout">
      <Mobile>
        <TopBar />
      </Mobile>
      <Background />
      <TaskBar />
      <Welcome />
    </main>
  );
};
