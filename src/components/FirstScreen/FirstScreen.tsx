import s from "./FirstScreen.module.scss";

type Props = {
  page: "main" | "sub";
  image: string;
};

export const FirstScreen = ({ page, image }: Props) => {
  return (
    <section className={page === "main" ? s.firstScreen_full : s.firstScreen}>
      <img className={s.firstScreen__image} src={image} alt="hero" />
    </section>
  );
};
