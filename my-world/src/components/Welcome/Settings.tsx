import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { setColor } from "modules/SettingReducer";
import { NickNameInput } from "components/Welcome/NicknameInput";
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

  const clearAllInfo = () => {
    const accept = window.confirm("정말로 초기화하시겠습니까?");
    if (accept) {
      window.localStorage.clear();
      window.location.reload();
    }
  };
  return (
    <section className="settings">
      <header>
        <h2>SETTINGS</h2>
      </header>
      <article>
        <Icon
          imgSize="50px"
          clickedTime={1}
          belongToSettings={true}
          fontColor="white"
        />
      </article>
      <main>
        <div>
          <div className="theme-color">
            <input type="color" onChange={onChangeColor} defaultValue={color} />
            <label>색상 변경</label>
          </div>
          <div className="nickname">
            {possibleToInput ? (
              <NickNameInput />
            ) : (
              <>
                <button onClick={changeNickname}>
                  <i className="bi bi-person-square"></i>
                </button>
                <label>{nickname}</label>
              </>
            )}
          </div>
          <div className="clear-btn">
            <button onClick={clearAllInfo}>
              <i className="bi bi-radioactive"></i>
            </button>
            <label>초기화</label>
          </div>
        </div>
      </main>
    </section>
  );
};
