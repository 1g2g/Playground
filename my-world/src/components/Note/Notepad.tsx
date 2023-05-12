import { RootState } from "modules";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { storeNotepad } from "modules/NoteReducer";

export const Notepad = () => {
  const contentsNow = useSelector((state: RootState) => state.NoteReducer);
  const dispatch = useDispatch();
  const store = (text: string) => {
    dispatch(storeNotepad(text));
  };
  return (
    <>
      <textarea
        onChange={(e) => {
          store(e.target.value);
        }}
        maxLength={5000}
        defaultValue={contentsNow.notepad}
        className="notepad"
      ></textarea>
    </>
  );
};
