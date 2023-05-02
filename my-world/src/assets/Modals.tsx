import { StartupModal } from "components/Taskbar/StartupModal";
import NOTE_ICON from "assets/paper.png";
import WINDOW_ICON from "assets/plane.png";

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
    img: WINDOW_ICON,
    desc: "startup modal in taskbar",
    component: <StartupModal />,
  },
  {
    type: "BasicModal",
    img: NOTE_ICON,
    desc: "basic modal for example",
    component: <BasicModal />,
  },
];
