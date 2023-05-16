import { useState, MouseEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "modules/ModalReducer";
import { ModalComponents } from "assets/Modals";
import "components/Square/square.scss";

type IconType = {
  size: string;
  clickedTime: number;
  hover: boolean;
  font: string;
};

export const Icon = ({ size, clickedTime, hover, font }: IconType) => {
  const dispatch = useDispatch();
  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [clickedImg, setClickedImg] = useState("");
  const onFocusIcon = (e: MouseEvent) => {
    setClickedImg(e.currentTarget.id);
  };
  const onClickOutside = (e: MouseEvent) => {
    if (e.target === outside.current) setClickedImg("");
  };

  const onModalOpen = (e: MouseEvent) => {
    dispatch(openModal(e.currentTarget.id));
  };

  return (
    <div className="applications" ref={outside} onClick={onClickOutside}>
      {ModalComponents.map((modal) => {
        return (
          <div
            key={modal.type}
            id={modal.type}
            onClick={clickedTime === 1 ? onModalOpen : onFocusIcon}
            onDoubleClick={clickedTime === 2 ? onModalOpen : undefined}
            className={[
              hover && "icon-hover",
              clickedImg === modal.type && "colorChange",
            ].join(" ")}
          >
            <img
              src={modal.img}
              alt={modal.desc}
              style={{ width: size, height: size }}
            />
            <span style={{ color: font }}>{modal.name}</span>
          </div>
        );
      })}
    </div>
  );
};
