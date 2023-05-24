import { Note } from "components/Modals/NoteApp";
import { TodoApp } from "components/Note/TodoApp";
import { Notepad } from "components/Note/Notepad";
import { Code } from "components/Note/Code";
import { PAPER_ICON, CLICK_ICON, MIRROR_ICON } from "assets/UrlStorage";
import { InputShortcut } from "components/Modals/InputShortcut";
import { Mirror } from "components/Mirror/Mirror";

export type ModalComponentsType = {
  type: string;
  name: string;
  img: string;
  desc: string;
  component: JSX.Element;
};
export const ModalComponents = [
  {
    type: "application",
    name: "note",
    img: PAPER_ICON,
    desc: "note modal",
    component: <Note />,
  },
  {
    type: "setting",
    name: "Add Shortcut",
    img: CLICK_ICON,
    desc: "modal for input shortcut",
    component: <InputShortcut />,
  },
  {
    type: "application",
    name: "mirror",
    img: MIRROR_ICON,
    desc: "modal for reflect you",
    component: <Mirror />,
  },
];
export const NoteComponents = [
  {
    name: "Notepad",
    component: <Notepad />,
    icon: <i className="bi bi-sticky"></i>,
  },
  {
    name: "Todo",
    component: <TodoApp />,
    icon: <i className="bi bi-card-checklist"></i>,
  },
  {
    name: "Code",
    component: <Code />,
    icon: <i className="bi bi-code-slash"></i>,
  },
];
