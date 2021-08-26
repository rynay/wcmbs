import { Link } from "react-router-dom";
import { courses } from "../../data/courses";

type Props<T> = {
  content: T extends (infer R)[] ? R : T;
};

export const Course = ({ content }: Props<typeof courses>) => {
  return (
    <Link to={content.link}>
      <img src={content.image} alt="" />
      <div>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
      <button>Learn more</button>
    </Link>
  );
};
