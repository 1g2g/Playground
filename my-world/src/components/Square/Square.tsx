import { StartupModal } from "components/Taskbar/StartupModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "modules";
import { closeModal } from "modules/ModalReducer";
import { useRef } from "react";
import { useModal } from "hooks/useModalClose";

const ModalComponents = [
  {
    type: "StartupModal",
    component: <StartupModal />,
  },
];
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
