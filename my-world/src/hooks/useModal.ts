import { useEffect } from "react";

export const useModal = (outsideRef: any, handler: any) => {
  useEffect(() => {
    const listener = (e: any) => {
      console.log(e);
      if (e.target !== outsideRef.current) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => {};
  }, [outsideRef]);
};
