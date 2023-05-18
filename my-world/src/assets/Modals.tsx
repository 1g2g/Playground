import { Note } from "components/Modals/NoteApp";
import { TodoApp } from "components/Note/TodoApp";
import { Notepad } from "components/Note/Notepad";
import { Code } from "components/Note/Code";
import { PAPER_IMG } from "assets/UrlStorage";

export const ModalComponents = [
  {
    type: "NoteModal",
    name: "note",
    img: PAPER_IMG,
    desc: "note modal",
    component: <Note />,
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
