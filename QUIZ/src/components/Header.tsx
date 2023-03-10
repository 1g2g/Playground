import React, { useEffect } from "react";
import { nicknameProps } from "./App";
const Header: React.FC<nicknameProps> = ({ nickname }) => {
  console.log(nickname);
  return (
    <>
      {Boolean(nickname) ? (
        <header>Welcome! {nickname}</header>
      ) : (
        "Enter you nickname!"
      )}
    </>
  );
};
export default Header;
