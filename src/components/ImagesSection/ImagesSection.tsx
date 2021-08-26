import { ReactElement } from "react";
import s from "./ImagesSection.module.scss";

type Props = {
  children: ReactElement | ReactElement[];
};

export const ImagesSection = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
