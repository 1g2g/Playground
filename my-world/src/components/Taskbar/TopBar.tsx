import { StateBar } from "components/Taskbar/StateBar";
import { Weather } from "components/Taskbar/Weather";
import "components/Taskbar/taskbar.scss";
export const TopBar = () => {
  return (
    <section className="task-bar top-bar">
      <Weather />
      <StateBar />
    </section>
  );
};
