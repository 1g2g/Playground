import React, { useEffect, useState } from "react";
import { getNicknameLocalStorage } from "../utils/handeLocalStorage";
import Router from "./Router";
export interface nicknameProps {
  nickname: string;
}
const App = () => {
  const [init, setInit] = useState(false);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const nickname = getNicknameLocalStorage();
    if (nickname !== null) setNickname(nickname);
    setInit(true);
  }, []);
  return <>{init ? <Router nickname={nickname} /> : "loading..."}</>;
};
export default App;
