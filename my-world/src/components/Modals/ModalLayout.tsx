import { useEffect, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { ModalComponents } from "assets/Modals";
import { closeModal } from "modules/ModalReducer";

export const ModalNow = () => {
  const { modalName } = useSelector((state: RootState) => state.ModalReducer);
  const findModal = ModalComponents.find((modal) => {
    return modal.type === modalName;
  });
  useEffect(() => {}, []);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const moveModal = useDrag((params) => {
    setPosition({
      x: params.offset[0],
      y: params.offset[1],
    });
  }, []);

  const dispatch = useDispatch();
  const handleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(closeModal(""));
  };
  return (
    <section
      style={{
        position: "relative",
        top: position.y,
        left: position.x,
        display: "inline-block",
      }}
      className=" modal-layout"
    >
      <div className="modal-top" {...moveModal()}>
        <img src={findModal?.img} alt={findModal?.desc} />
        {findModal?.name}
        <button onClick={handleModal}>X</button>
      </div>
      <div>{findModal?.component}</div>
    </section>
  );
};
