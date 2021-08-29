import { Link } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import s from "./ContactUs.module.scss";

export const ContactUs = () => {
  return (
    <div className={s.contactUs}>
      <SLink to="top">
        <Link className={s.contactUs__button} to="/contact">
          Contact us
        </Link>
      </SLink>
    </div>
  );
};
