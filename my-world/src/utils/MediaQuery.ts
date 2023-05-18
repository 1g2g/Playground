import { useMediaQuery } from "react-responsive";

type MediaQueryType = (props: { children: JSX.Element }) => JSX.Element | null;

export const PCandTab: MediaQueryType = (props) => {
  const isnotMobile = useMediaQuery({ minWidth: 768 });
  return isnotMobile ? props.children : null;
};

export const Mobile: MediaQueryType = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? props.children : null;
};
