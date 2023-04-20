import { logos } from "assets/ShortCut";
import { Link } from "react-router-dom";
import "components/Taskbar/taskbar.scss";

export type LogoType = {
  index: number;
  desc: string;
  src: string;
  shortcut?: string;
};
export const AppShortcuts = () => {
  return (
    <div className="window-button">
      <button>
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
  );
};
