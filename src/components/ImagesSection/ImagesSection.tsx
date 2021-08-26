import s from "./ImagesSection.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const ImagesSection = ({ children }: Props) => {
  return <div className={s.container}>{children}</div>;
};
