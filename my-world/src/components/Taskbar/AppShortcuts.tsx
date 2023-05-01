import { logos } from "assets/ShortCut";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal } from "modules/ModalReducer";
import { WINDOW_ICON, GOOGLING_URL } from "assets/UrlStorage";
import "components/Taskbar/taskbar.scss";

export type LogoType = {
  index: number;
  desc: string;
  src: string;
  shortcut?: string;
};
export const AppShortcuts = () => {
  const modalState = useSelector((state: RootState) => state.ModalReducer);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const showStartupMenu = () => {
    if (!modalState.show) dispatch(openModal("StartupModal"));
  };
  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      window.open(`${GOOGLING_URL}${inputRef.current.value}`, "_blank");
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="window-button">
        <button onClick={showStartupMenu} className="hoverElem">
          <img src={WINDOW_ICON} alt="window button" />
        </button>
        <div className="find-app">
          <i className="bi bi-search reading-glasses"></i>
          <form onSubmit={(e) => handleInput(e)}>
            <input type="text" ref={inputRef} placeholder="구글 검색" />
          </form>
        </div>
        <div className="shortcuts">
          {logos.map((logo) => (
            <Link
              to={logo.shortcut ? logo.shortcut : ""}
              target="_blank"
              onClick={(e) => {
                if (!logo.shortcut) e.preventDefault();
              }}
              key={logo.index}
              className="hoverElem"
            >
              <img src={logo.src} alt={logo.desc} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
