import { ReactElement } from "react";
import s from "./PageContentLayout.module.scss";

type Props = {
  children: ReactElement | ReactElement[];
};

export const PageContentLayout = ({ children }: Props) => {
  return (
    <div className={s.container}>
      <article className={s.article}>{children}</article>
    </div>
  );
};
