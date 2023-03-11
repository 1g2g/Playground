import React from "react";
import { nicknameProps } from "./App";

const Header: React.FC<nicknameProps> = ({ nickname }) => {
  console.log(nickname);
  return (
    <>
      {nickname ? (
        <header>Welcome! {nickname}</header>
      ) : (
        <header>Enter your nickname!</header>
      )}
    </>
  );
};

export default Header;
