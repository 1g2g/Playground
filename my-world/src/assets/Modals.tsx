import { StartupModal } from "components/Taskbar/StartupModal";
import NOTE_ICON from "assets/img/paper.png";
import WINDOW_ICON from "assets/img/plane.png";

const BasicModal = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50vh",
        border: "1px solid",
        padding: "10px",
        backgroundColor: "white",
        zIndex: "100",
      }}
    >
      This is basic modal
    </div>
  );
};
export const ModalComponents = [
  {
    type: "StartupModal",
    name: "window",
    img: WINDOW_ICON,
    desc: "startup modal in taskbar",
    component: <StartupModal />,
  },
  {
    type: "NoteModal",
    name: "note",
    img: NOTE_ICON,
    desc: "note modal",
    component: <BasicModal />,
  },
];
