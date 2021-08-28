import s from "./ImagesSection.module.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
  maxInRow?: 2 | 3 | 4 | 5;
};

export const ImagesSection = ({ children, maxInRow }: Props) => {
  return (
    <div
      className={`${s.container} ${maxInRow ? s[`container_${maxInRow}`] : ""}`}
    >
      {children}
    </div>
  );
};
