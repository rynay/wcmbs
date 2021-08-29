import { useState } from "react";
import { faq } from "../../data/faq";
import { Plus } from "../icons/Plus";
import s from "./Accordion.module.scss";

type Props<T> = {
  topics: T extends { [key in string]: infer R } ? R : never;
};

export const Accordion = ({ topics }: Props<typeof faq>) => {
  const [target, setTarget] = useState<string>();
  return (
    <section className={s.accordion}>
      {topics.map((topic) => (
        <div
          key={topic}
          onClick={() =>
            target === topic ? setTarget(undefined) : setTarget(topic)
          }
          className={
            target === topic
              ? s.accordion__topic + " " + s.accordion__topic_open
              : s.accordion__topic + " " + s.accordion__topic_closed
          }
        >
          <h3>
            <span>&#x2b;</span>
            <span>{topic}</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>
        </div>
      ))}
    </section>
  );
};
