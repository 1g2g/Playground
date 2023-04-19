import { useEffect, useState } from "react";
export const Clock = () => {
  const [time, setTime] = useState<Date>();
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="time">{time?.toLocaleTimeString()}</div>
      <div className="date">{time?.toDateString()}</div>
    </>
  );
};
