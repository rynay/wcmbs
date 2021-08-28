import { socials } from "../../data/socials";
import s from "./Socials.module.scss";

export const Socials = () => {
  return (
    <ul className={s.socials}>
      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.alt}>
            <a href={item.link} aria-label={item.alt}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
