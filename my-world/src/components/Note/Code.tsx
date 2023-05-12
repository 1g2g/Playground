import { useEffect, useRef, useState } from "react";
import { RootState } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { removeCode, storeCode } from "modules/CodeReducer";
import { SelectLanguage } from "components/Note/SelectLanguage";
import Highlight from "react-highlight";
import "highlight.js/styles/github.css";

export type SetLangType = (value: React.SetStateAction<string>) => void;

export const Code = () => {
  const [modifyCode, setModifyCode] = useState(false);
  const [lang, setLang] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const contentsNow = useSelector((state: RootState) => state.CodeReducer);
  const dispatch = useDispatch();
  const store = (text: string) => {
    dispatch(storeCode(text, lang));
  };
  const remove = () => dispatch(removeCode());
  useEffect(() => {
    if (contentsNow.code === "") setModifyCode(true);
    setLang(contentsNow.lang);
  }, [contentsNow]);

  const saveNote = () => {
    if (inputRef.current?.value) {
      store(inputRef.current.value);
    }
    if (inputRef.current?.value !== "") {
      setModifyCode(false);
    } else {
      alert("저장할 내용이 없습니다.");
    }
  };
  const clearCode = () => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  };
  return (
    <div className="code">
      {modifyCode ? (
        <>
          <div>
            <SelectLanguage lang={lang} setLang={setLang} />
            <button onClick={clearCode}>초기화</button>
            <button onClick={saveNote}>저장</button>
          </div>
          <textarea
            ref={inputRef}
            maxLength={5000}
            defaultValue={contentsNow.code}
          ></textarea>
        </>
      ) : (
        <>
          <div>
            <button onClick={() => setModifyCode(true)}>수정</button>
            <button onClick={() => remove()}>삭제</button>
          </div>
          <Highlight className={lang}>{contentsNow.code}</Highlight>
        </>
      )}
    </div>
  );
};

export default Code;
