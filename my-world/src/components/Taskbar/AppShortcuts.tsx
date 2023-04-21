import { logos } from "assets/ShortCut";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal, closeModal } from "modules/ModalReducer";
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

  const toggleStartupMenu = () => {
    if (modalState.show) dispatch(closeModal());
    else dispatch(openModal());
  };
  console.log(modalState.show);
  return (
    <>
      <div className="window-button">
        <button onClick={toggleStartupMenu}>
          <img
            src="https://seeklogo.com/images/W/windows-11-icon-logo-6C39629E45-seeklogo.com.png"
            alt="window button"
          />
        </button>
        <div className="find-app">
          <i className="bi bi-search reading-glasses"></i>
          <input type="text" placeholder="검색" />
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
            >
              <img src={logo.src} alt={logo.desc} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
