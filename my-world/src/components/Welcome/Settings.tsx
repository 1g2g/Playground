import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { setColor } from "modules/SettingReducer";
import { NickNameInput } from "./NicknameInput";
import "components/Welcome/welcome.scss";
import { Icon } from "components/Square/Icon";
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
      <div>
        <label>테마 컬러 지정</label>
        <input type="color" onChange={onChangeColor} defaultValue={color} />
      </div>
      {possibleToInput ? (
        <NickNameInput />
      ) : (
        <>
          <div>
            <span>{nickname}</span>
            <button onClick={changeNickname}>
              <i className="bi bi-person-square"></i>
            </button>
          </div>
        </>
      )}
      <article>
        <Icon size="50px" clickedTime={1} hover={true} font="white" />
      </article>
    </section>
  );
};
