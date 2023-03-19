import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export interface buttonProps {
  pageToGo: string;
  originClass: string;
  extraClass: string;
}
export const ButtonExpansion: React.FC<buttonProps> = ({
  pageToGo,
  originClass,
  extraClass,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const moveToGame = () => {
    setIsClicked(true);
    setTimeout(function () {
      navigate(`/${pageToGo}`);
    }, 2000);
  };
  return (
    <button
      className={isClicked ? `${originClass} ${extraClass}` : originClass}
      onClick={moveToGame}
    >
      {originClass.toUpperCase()}
    </button>
  );
};
