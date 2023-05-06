import { useRef, useState, useEffect } from "react";
import { RootState } from "modules";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { storeCode } from "modules/NoteReducer";
import { keywordsMap } from "assets/SyntaxKeywords";

export const Code = () => {
  const [modifyCode, setModifyCode] = useState(false);
  const [code, setCode] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const contentsNow = useSelector((state: RootState) => state.NoteReducer);
  const dispatch = useDispatch();
  const store = (text: string) => {
    dispatch(storeCode(text));
  };

  const saveNote = () => {
    if (inputRef.current?.value) {
      store(inputRef.current.value);
      splitCode(inputRef.current.value);
    }
    setModifyCode(false);
  };

  const splitCode = (codes: string) => {
    let i = 0;
    let prevIdx = 0;
    const newCode: string[] = [];

    for (let c of codes) {
      const mat = c.match(/[.\s(){};<>[\]]/);
      if (mat !== null) {
        newCode.push(codes.slice(prevIdx, i));
        newCode.push(codes.slice(i, i + 1));

        prevIdx = i + 1;
      }
      i++;
    }
    newCode.push(codes.slice(prevIdx));
    setCode(newCode);
  };
  useEffect(() => {
    splitCode(contentsNow.code);
  }, []);
  const ColoredCode = () => {
    return (
      <>
        {code.map((c, idx) => {
          if (c.indexOf("use") !== -1 || c.indexOf("set") !== -1)
            return (
              <span key={idx} style={{ color: "rgb(115 131 243)" }}>
                {c}
              </span>
            );
          return (
            <span key={idx} style={{ color: keywordsMap.get(c.toUpperCase()) }}>
              {c}
            </span>
          );
        })}
      </>
    );
  };
  return (
    <>
      {modifyCode ? (
        <>
          <textarea
            ref={inputRef}
            maxLength={5000}
            defaultValue={contentsNow.code}
          ></textarea>
          <button onClick={saveNote}>저장</button>
        </>
      ) : (
        <>
          <ColoredCode />
          <button onClick={() => setModifyCode(true)}>수정</button>
        </>
      )}
    </>
  );
};

export default Code;
