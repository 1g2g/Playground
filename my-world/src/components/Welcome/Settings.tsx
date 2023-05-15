import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { setColor } from "modules/SettingReducer";
import { NickNameInput } from "./NicknameInput";
import "components/Welcome/welcome.scss";
export const Settings = () => {
  const [possibleToInput, setPossibleToInput] = useState(false);
  const { color, nickname } = useSelector(
    (state: RootState) => state.SettingReducer
  );
  const dispatch = useDispatch();
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setColor(e.currentTarget.value));
  };
  const changeNickname = () => {
    setPossibleToInput(true);
  };
  useEffect(() => {
    setPossibleToInput(false);
  }, [nickname]);

  return (
    <section className="settings">
      <input type="color" onChange={onChangeColor} defaultValue={color} />
      {possibleToInput ? (
        <NickNameInput />
      ) : (
        <>
          <span>{nickname}</span>
          <button onClick={changeNickname}>
            <i className="bi bi-person-square"></i>
          </button>
        </>
      )}
    </section>
  );
};
