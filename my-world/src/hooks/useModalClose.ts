import { useEffect, RefObject } from "react";

type listenerType = (this: Document, ev: MouseEvent) => void;

type useModalType = (
  outsideRef: RefObject<HTMLDivElement>,
  handler: (event: MouseEvent) => void
) => void;

export const useModal: useModalType = (outsideRef, handler) => {
  useEffect(() => {
    const listener: listenerType = (e) => {
      if (e.target !== outsideRef.current) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [outsideRef]);
};
