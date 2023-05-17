import { useState, MouseEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "modules/ModalReducer";
import { ModalComponents } from "assets/Modals";
import "components/Square/square.scss";
import { useMediaQuery } from "react-responsive";

type IconPropsType = {
  imgSize: string;
  clickedTime: number;
  belongToSettings: boolean;
  fontColor: string;
};

export const Icon = ({
  imgSize,
  clickedTime,
  belongToSettings,
  fontColor,
}: IconPropsType) => {
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

  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div
      className={["applications", belongToSettings && "settings-grid"].join(
        " "
      )}
      ref={outside}
      onClick={onClickOutside}
    >
      {isPC
        ? ModalComponents.map((modal) => {
            return (
              <div
                key={modal.type}
                id={modal.type}
                onClick={clickedTime === 1 ? onModalOpen : onFocusIcon}
                onDoubleClick={clickedTime === 2 ? onModalOpen : undefined}
                className={[
                  belongToSettings && "icon-hover",
                  clickedImg === modal.type && "colorChange",
                ].join(" ")}
              >
                <img
                  src={modal.img}
                  alt={modal.desc}
                  style={{ width: imgSize, height: imgSize }}
                />
                <span style={{ color: fontColor }}>{modal.name}</span>
              </div>
            );
          })
        : ModalComponents.map((modal) => {
            return (
              <div key={modal.type} id={modal.type} onClick={onModalOpen}>
                <img
                  src={modal.img}
                  alt={modal.desc}
                  style={{ width: imgSize, height: imgSize }}
                />
                <span style={{ color: fontColor }}>{modal.name}</span>
              </div>
            );
          })}
    </div>
  );
};
