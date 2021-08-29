import { createPortal } from "react-dom";

type Props = {
  children: JSX.Element | false;
};

export const Portal = ({ children }: Props) => {
  return createPortal(children, document.getElementById("portal")!);
};
