// import { logos } from "assets/ShortCut";
import { useId, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal } from "modules/ModalReducer";
import { WINDOW_ICON, GOOGLING_URL } from "assets/UrlStorage";
import "components/Taskbar/taskbar.scss";
export const AppShortcuts = () => {
  const modalState = useSelector((state: RootState) => state.ModalReducer);
  const shortcutState = useSelector(
    (state: RootState) => state.ShortcutReducer
  );
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const showStartupMenu = () => {
    dispatch(openModal("StartupModal"));
  };

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      window.open(`${GOOGLING_URL}${inputRef.current.value}`, "_blank");
      inputRef.current.value = "";
    }
  };
  const onClickAddShortcut = () => {
    dispatch(openModal("Add Shortcut"));
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
          {shortcutState.map((logo) => (
            <Link
              to={logo.url ? logo.url : ""}
              target="_blank"
              onClick={(e) => {
                if (!logo.url) e.preventDefault();
              }}
              key={logo.url + logo.id}
              className="hoverElem"
            >
              <img src={logo.src} alt={logo.desc} />
            </Link>
          ))}
          <button onClick={onClickAddShortcut} className="hoverElem">
            <i className="bi bi-plus-circle-dotted"></i>
          </button>
        </div>
      </div>
    </>
  );
};
