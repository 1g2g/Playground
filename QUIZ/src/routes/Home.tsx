import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setNicknameLocalStorage } from "../utils/handeLocalStorage";
const Home = () => {
  const [nickname, setNickname] = useState("");
  //닉네임 설정
  const handleNickname = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const value = formData.get("nickname") as string;
    setNickname(value);
    setNicknameLocalStorage(value);
  };
  //게임스타트 버튼
  return (
    <div>
      <form onSubmit={handleNickname}>
        <input type="text" name="nickname" />
      </form>
      <Link to="/game">게임시작!</Link>
    </div>
  );
};
export default Home;
