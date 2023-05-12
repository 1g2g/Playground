import { MouseEvent, useState } from "react";
import { NoteComponents } from "assets/Modals";
import "components/Modals/modals.scss";
import "components/Note/note.scss";

export const Note = () => {
  const [componentNow, setComponentNow] = useState("Notepad");
  const onChangeNote = (e: MouseEvent) => {
    const clickedId = e.currentTarget.id;
    if (clickedId === "Notepad") setComponentNow("Notepad");
    else if (clickedId === "Todo") setComponentNow("Todo");
    else setComponentNow("Code");
  };

  const NoteComponent = () => {
    const properNote = NoteComponents.find(
      (note) => note.name === componentNow
    );
    return <> {properNote?.component} </>;
  };
  return (
    <div className="note-modal">
      <div className="note-buttons">
        {NoteComponents.map((v) => {
          return (
            <button onClick={onChangeNote} id={v.name} key={v.name}>
              {v.icon}
            </button>
          );
        })}
      </div>
      <div className="note-components">
        <NoteComponent />
      </div>
    </div>
  );
};
