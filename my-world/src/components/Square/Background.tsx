import { useState, MouseEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { openModal } from "modules/ModalReducer";
import { Square } from "components/Square/Square";
import { TodoApp } from "components/Todo/TodoApp";
import { ModalComponents } from "assets/Modals";
import "components/Square/square.scss";

export const Background = () => {
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
    <div className="background">
      <Square />
      <div className="applications" ref={outside} onClick={onClickOutside}>
        {ModalComponents.map((modal) => {
          return (
            <div key={modal.type}>
              <img
                id={modal.type}
                key={modal.type}
                onClick={onClickApp}
                className={clickedImg === modal.type ? "colorChange" : ""}
                onDoubleClick={handleDoubleClick}
                src={modal.img}
                alt={modal.desc}
              />
            </div>
          );
        })}
      </div>
      <TodoApp />
    </div>
  );
};
