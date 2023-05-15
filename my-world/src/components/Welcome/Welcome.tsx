import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import { NickNameInput } from "./NicknameInput";
import SPINNER from "assets/img/loading.png";
import "components/Welcome/welcome.scss";

export const Welcome = () => {
  const { color, nickname } = useSelector(
    (state: RootState) => state.SettingReducer
  );
  const [fadeOutEffect, setFadeOutEffect] = useState<string | null>(null);

  useEffect(() => {
    if (nickname === null) return;

    setFadeOutEffect((prev) => {
      if (prev === null) return "fadeout";
      else return prev;
    });
    const timer = setTimeout(() => {
      const welcomeSection = document.getElementById("welcome");
      if (welcomeSection) {
        setFadeOutEffect((prev) => prev + " disappearWelcome");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [nickname]);

  return (
    <section
      className={`welcome ${fadeOutEffect}`}
      style={{ backgroundColor: `${color}` }}
      id="welcome"
    >
      {nickname ? (
        <>
          <h1>Welcome {nickname}</h1>
          <div className="loading">
            <img src={SPINNER} alt="spinner for loading" />
          </div>
        </>
      ) : (
        <>
          <h2>반갑습니다</h2>
          <NickNameInput />
        </>
      )}
    </section>
  );
};
