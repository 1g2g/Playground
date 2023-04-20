import { useEffect, useState } from "react";
import "components/Taskbar/taskbar.scss";
export const StateBar = () => {
  const [time, setTime] = useState<Date>();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="state-bar">
      <div className="computer-state">
        <i className="bi bi-wifi"></i>
        <i className="bi bi-volume-mute"></i>
        <i className="bi bi-battery-full"></i>
      </div>
      <div className="time">
        <div>{time?.toLocaleTimeString()}</div>
        <div>{time?.toDateString()}</div>
      </div>
    </div>
  );
};
