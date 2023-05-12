import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { closeModal } from "modules/ModalReducer";
import { useModal } from "hooks/useModalClose";
import { ModalNow } from "components/Modals/ModalLayout";
import { StartupModal } from "components/Modals/StartupModal";

export const Square = () => {
  const { show, modalName } = useSelector(
    (state: RootState) => state.ModalReducer
  );
  const dispatch = useDispatch();

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
            {modalName === "StartupModal" ? <StartupModal /> : <ModalNow />}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
