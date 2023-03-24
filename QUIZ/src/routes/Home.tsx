import React, { useState, useContext } from "react";
import { setNicknameLocalStorage } from "../utils/handeLocalStorage";
import { ButtonExpansion } from "../components/ButtonExpansion";
import Store from "../utils/store";
const Home = () => {
  const state = useContext(Store);
  const [toggleInput, setToggleInput] = useState(
    state.nickname === "" ? true : false
  );
  //닉네임 설정
  const handleNickname = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const value = formData.get("nickname") as string;
    setNicknameLocalStorage(value);
  };
  const showInput = () => {
    setToggleInput((prev) => !prev);
  };
  //게임스타트 버튼
  return (
    <div className="homeArea">
      {toggleInput ? (
        <form onSubmit={handleNickname}>
          <input
            type="text"
            name="nickname"
            placeholder={
              state.nickname === ""
                ? "닉네임을 입력해주세요"
                : "변경할 닉네임을 입력해주세요"
            }
          />
        </form>
      ) : (
        <button onClick={showInput} className="showInput">
          닉네임 설정
        </button>
      )}
      <Store.Consumer>
        {(Store) =>
          Store.nickname ? (
            <ButtonExpansion
              pageToGo="game"
              originClass="gameStart"
              extraClass="btnExpansion"
            />
          ) : (
            <button className="gameStart" disabled>
              GAMESTART
            </button>
          )
        }
      </Store.Consumer>
    </div>
  );
};
export default Home;
