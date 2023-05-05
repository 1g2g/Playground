import { MouseEvent, useState } from "react";
import { ModalComponents, NoteComponents } from "assets/Modals";
import "components/Modals/modals.scss";

export const Note = () => {
  const [componentNow, setComponentNow] = useState("Notepad");
  const noteModal = ModalComponents.find((modal) => modal.name === "note");
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
    <div className="note-modal modal-layout">
      <div className="modal-top">
        <img src={noteModal?.img} alt={noteModal?.desc} />
        {NoteComponents.map((v) => {
          return (
            <button onClick={onChangeNote} id={v.name} key={v.name}>
              {v.name}
            </button>
          );
        })}
      </div>
      <NoteComponent />
    </div>
  );
};
