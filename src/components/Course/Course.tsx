import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import s from "./Course.module.scss";

type Props<T> = {
  content: T extends (infer R)[] ? R : T;
};

export const Course = ({ content }: Props<typeof courses>) => {
  return (
    <Link className={s.course} to={content.link}>
      <img className={s.course__image} src={content.image} alt="" />
      <div className={s.course__content}>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
      <button className={s.course__button}>Learn more</button>
    </Link>
  );
};
