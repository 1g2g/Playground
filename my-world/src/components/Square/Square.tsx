import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { closeModal } from "modules/ModalReducer";
import { useModal } from "hooks/useModalClose";
import { ModalNow } from "components/Modals/ModalLayout";
import { SettingsModal } from "components/Modals/SettingsModal";

export const Square = () => {
  const modal = useSelector((state: RootState) => state.ModalReducer);
  const dispatch = useDispatch();

  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;
  useModal(outside, () => dispatch(closeModal("")));

  return (
    <section>
      {modal.show && (
        <>
          <div
            ref={outside}
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
            }}
          >
            {modal.name === "StartupModal" ? <SettingsModal /> : <ModalNow />}
          </div>
        </>
      )}
    </section>
  );
};
