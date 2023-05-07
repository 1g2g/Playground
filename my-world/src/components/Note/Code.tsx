import { useRef, useState } from "react";
import { RootState } from "modules";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { storeCode } from "modules/NoteReducer";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";

const LANGUAGE = ["javascript", "java", "python", "c", "c++", "kotlin"];

export const Code = () => {
  const [modifyCode, setModifyCode] = useState(false);
  const [lang, setLang] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const contentsNow = useSelector((state: RootState) => state.NoteReducer);
  const dispatch = useDispatch();
  const store = (text: string) => {
    dispatch(storeCode(text));
  };

  const saveNote = () => {
    if (inputRef.current?.value) {
      store(inputRef.current.value);
    }
    setModifyCode(false);
  };

  return (
    <>
      {modifyCode ? (
        <>
          <select
            defaultValue={lang}
            onChange={(e) => {
              setLang(e.currentTarget.value);
            }}
          >
            {LANGUAGE.map((p) => {
              return (
                <option value={p} key={p}>
                  {p}
                </option>
              );
            })}
          </select>
          <textarea
            ref={inputRef}
            maxLength={5000}
            defaultValue={contentsNow.code}
          ></textarea>
          <button onClick={saveNote}>저장</button>
        </>
      ) : (
        <>
          <Highlight className={lang}>{contentsNow.code}</Highlight>
          <button onClick={() => setModifyCode(true)}>수정</button>
        </>
      )}
    </>
  );
};

export default Code;
