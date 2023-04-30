import { StartupModal } from "components/Taskbar/StartupModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import { closeModal } from "modules/ModalReducer";
import { useRef } from "react";
import { useModal } from "hooks/useModal";
export const Square = () => {
  const modalState = useSelector((state: RootState) => state.ModalReducer);
  const dispatch = useDispatch();

  const outside = useRef() as React.MutableRefObject<HTMLDivElement>;

  useModal(outside, () => dispatch(closeModal()));
  return (
    <section>
      {modalState.show ? (
        <>
          <div
            ref={outside}
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
            }}
          >
            <StartupModal />
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};
