import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { closeModal } from "modules/ModalReducer";
import { useModal } from "hooks/useModalClose";
import { ModalComponents } from "assets/Modals";

export const Square = () => {
  const { modalName, show } = useSelector(
    (state: RootState) => state.ModalReducer
  );
  const dispatch = useDispatch();
  const findModal = ModalComponents.find((modal) => {
    return modal.type === modalName;
  });

  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;
  useModal(outside, () => dispatch(closeModal("")));

  return (
    <section>
      {show ? (
        <>
          <div
            ref={outside}
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
            }}
          >
            {findModal?.component}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
