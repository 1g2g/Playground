import NOTE_ICON from "assets/img/paper.png";
import { Note } from "components/Modals/NoteApp";
import { TodoApp } from "components/Note/TodoApp";
import { Notepad } from "components/Note/Notepad";
import { Code } from "components/Note/Code";

export const ModalComponents = [
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
