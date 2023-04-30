import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "components/Taskbar/taskbar.scss";
const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/r?pli=1";
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
      <div className="computer-state hoverElem">
        <i className="bi bi-wifi "></i>
        <i className="bi bi-volume-mute"></i>
        <i className="bi bi-battery-full"></i>
      </div>
      <Link to={CALENDAR_URL} target="_blank" className="time hoverElem">
        <div>{time?.toLocaleTimeString()}</div>
        <div>{time?.toDateString()}</div>
      </Link>
    </div>
  );
};
