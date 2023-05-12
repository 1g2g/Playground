import { useState, MouseEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal } from "modules/ModalReducer";
import { ModalComponents } from "assets/Modals";
import "components/Square/square.scss";

export const Icon = () => {
  const { show } = useSelector((state: RootState) => state.ModalReducer);
  const dispatch = useDispatch();
  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [clickedImg, setClickedImg] = useState("");
  const onClickApp = (e: MouseEvent) => {
    setClickedImg(e.currentTarget.id);
  };
  const onClickOutside = (e: MouseEvent) => {
    if (e.target === outside.current) setClickedImg("");
  };

  const handleDoubleClick = (e: MouseEvent) => {
    if (!show) dispatch(openModal(e.currentTarget.id));
  };
  return (
    <div className="applications" ref={outside} onClick={onClickOutside}>
      {ModalComponents.map((modal) => {
        return (
          <div
            key={modal.type}
            id={modal.type}
            onClick={onClickApp}
            className={clickedImg === modal.type ? "colorChange" : ""}
            onDoubleClick={handleDoubleClick}
          >
            <img src={modal.img} alt={modal.desc} />
            <span>{modal.name}</span>
          </div>
        );
      })}
    </div>
  );
};
