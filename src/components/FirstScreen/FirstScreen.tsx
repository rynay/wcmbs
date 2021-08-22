import s from "./FirstScreen.module.scss";

type Props = {
  page: "main" | "sub";
  image: string;
};

export const FirstScreen = ({ page, image }: Props) => {
  return (
    <section className={s.firstScreen}>
      <img
        className={`${s.firstScreen__image} ${
          page === "main"
            ? s.firstScreen__image_cover
            : s.firstScreen__image_contain
        }`}
        src={image}
        alt="hero"
      />
    </section>
  );
};
