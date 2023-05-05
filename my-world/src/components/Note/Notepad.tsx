import { useRef } from "react";
import { RootState } from "modules";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { storeNotepad } from "modules/NoteReducer";

export const Notepad = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const contentsNow = useSelector((state: RootState) => state.NoteReducer);
  const dispatch = useDispatch();
  const store = (text: string) => {
    dispatch(storeNotepad(text));
  };
  const saveNote = () => {
    if (inputRef.current !== null) {
      store(inputRef.current.value);
    }
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}></form>
      <textarea
        ref={inputRef}
        maxLength={5000}
        defaultValue={contentsNow.notepad}
      ></textarea>
      <button onClick={saveNote}>저장</button>
    </>
  );
};
