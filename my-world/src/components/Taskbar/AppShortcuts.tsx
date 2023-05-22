// import { logos } from "assets/ShortCut";
import { useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal } from "modules/ModalReducer";
import { WINDOW_ICON, GOOGLING_URL } from "assets/UrlStorage";
import "components/Taskbar/taskbar.scss";
import { delShortcut } from "modules/ShortcutReducer";
export const AppShortcuts = () => {
  const [hideIcon, setHideIcon] = useState(true);
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
  const toggleDelShortcut = () => {
    setHideIcon((prev) => !prev);
  };
  const deleteShortcut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(delShortcut(parseInt(e.currentTarget.id)));
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
          <button
            onClick={toggleDelShortcut}
            className="delete-shortcuts hoverElem"
          >
            <i className="bi bi-dash-circle-dotted"></i>
          </button>
          {shortcutState.map((logo) => (
            <div key={logo.url + logo.id}>
              <Link
                to={logo.url ? logo.url : ""}
                target="_blank"
                className="hoverElem"
                onClick={(e) => {
                  if (!logo.url) e.preventDefault();
                }}
              >
                <img src={logo.src} alt={logo.desc} />
              </Link>
              <div
                onClick={(e) => deleteShortcut(e)}
                id={String(logo.id)}
                className={`trashcan-icon ${hideIcon && "hide"}`}
              >
                <i className="bi bi-x"></i>
              </div>
            </div>
          ))}
          <button onClick={onClickAddShortcut} className="hoverElem">
            <i className="bi bi-plus-circle-dotted"></i>
          </button>
        </div>
      </div>
    </>
  );
};
