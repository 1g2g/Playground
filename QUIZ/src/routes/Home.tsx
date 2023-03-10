import React, { useEffect, useState } from "react";
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
    </div>
  );
};
export default Home;
