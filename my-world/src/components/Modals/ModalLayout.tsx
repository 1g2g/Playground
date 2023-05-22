import { useEffect, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { ModalComponents } from "assets/Modals";
import { closeModal } from "modules/ModalReducer";
import { useMediaQuery } from "react-responsive";

export const ModalNow = () => {
  const { color } = useSelector((state: RootState) => state.SettingReducer);

  const { modalName } = useSelector((state: RootState) => state.ModalReducer);
  const [modal, setModal] = useState<any>();
  useEffect(() => {
    const findModal = ModalComponents.find((modal) => {
      return modal.name === modalName;
    });
    setModal(findModal);
  }, []);

  const isPC = useMediaQuery({ minWidth: 1024 });
  const MODAL_INIT_POS = isPC ? 100 : 0;
  const [position, setPosition] = useState({
    x: MODAL_INIT_POS,
    y: MODAL_INIT_POS,
  });
  const moveModal = useDrag((params) => {
    setPosition({
      x: params.offset[0] + MODAL_INIT_POS,
      y: params.offset[1] + MODAL_INIT_POS,
    });
  }, []);

  const dispatch = useDispatch();
  const handleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(closeModal(""));
  };
  return (
    modal && (
      <section
        style={{
          position: "relative",
          top: position.y,
          left: position.x,
          display: "inline-block",
        }}
        className="modal-layout"
      >
        <div
          className="modal-top"
          {...moveModal()}
          style={{ backgroundColor: `${color}` }}
        >
          <img src={modal.img} alt={modal.desc} />
          {modal.name}
          <button onClick={handleModal}>X</button>
        </div>
        <div className="modal-content">{modal.component}</div>
      </section>
    )
  );
};
