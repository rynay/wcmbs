import { faq } from "../../data/faq";

type Props<T> = {
  topics: T extends { [key in string]: infer R } ? R : never;
};

export const Accordion = ({ topics }: Props<typeof faq>) => {
  return <div></div>;
};
