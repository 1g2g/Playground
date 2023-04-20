import { StateBar } from "components/Taskbar/StateBar";
import { Weather } from "components/Taskbar/Weather";
import { AppShortcuts } from "components/Taskbar/AppShortcuts";

import "components/Taskbar/taskbar.scss";
export const TaskBar = () => {
  return (
    <section className="task-bar">
      <Weather />
      <AppShortcuts />
      <StateBar />
    </section>
  );
};
