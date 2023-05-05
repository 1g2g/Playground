import { StartupModal } from "components/Modals/StartupModal";
import NOTE_ICON from "assets/img/paper.png";
import WINDOW_ICON from "assets/img/plane.png";
import { Note } from "components/Modals/NoteApp";
import { TodoApp } from "components/Note/TodoApp";
import { Notepad } from "components/Note/Notepad";
import { Code } from "components/Note/Code";

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
    component: <Note />,
  },
];

export const NoteComponents = [
  {
    name: "Notepad",
    component: <Notepad />,
  },
  {
    name: "Todo",
    component: <TodoApp />,
  },
  {
    name: "Code",
    component: <Code />,
  },
];
