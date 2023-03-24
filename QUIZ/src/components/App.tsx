import React, { useEffect, useState } from "react";
import { getNicknameLocalStorage } from "../utils/handeLocalStorage";
import Router from "./Router";
import Store from "../utils/store";

const App = () => {
  const [init, setInit] = useState(false);
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    const nickname = getNicknameLocalStorage();
    if (nickname !== null) setNickname(nickname);
    setInit(true);
  }, []);
  return (
    <Store.Provider value={{ nickname: nickname }}>
      {init ? <Router /> : "loading..."}
    </Store.Provider>
  );
};
export default App;
