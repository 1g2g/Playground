import React, { useEffect, useState } from "react";
import { setNicknameLocalStorage } from "../utils/handeLocalStorage";
import { ButtonExpansion } from "../components/ButtonExpansion";
const Home = () => {
  const [nickname, setNickname] = useState("");
  const [toggleInput, setToggleInput] = useState(false);
  //닉네임 설정
  const handleNickname = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const value = formData.get("nickname") as string;
    setNickname(value);
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
              nickname === ""
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

      <ButtonExpansion
        pageToGo="game"
        originClass="gameStart"
        extraClass="btnExpansion"
      />
    </div>
  );
};
export default Home;
