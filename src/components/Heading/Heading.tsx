import s from "./Heading.module.scss";

type Props = {
  children: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({ children, level }: Props) => {
  return (
    <>
      {level === 1 && <h1 className={s.heading}>{children}</h1>}
      {level === 2 && <h2 className={s.heading}>{children}</h2>}
      {level === 3 && <h3 className={s.heading}>{children}</h3>}
      {level === 4 && <h4 className={s.heading}>{children}</h4>}
      {level === 5 && <h5 className={s.heading}>{children}</h5>}
      {level === 6 && <h6 className={s.heading}>{children}</h6>}
    </>
  );
};
