import { Link } from "react-router-dom";
import s from "./ContactUs.module.scss";

export const ContactUs = () => {
  return (
    <div className={s.contactUs}>
      <Link className={s.contactUs__button} to="/contact">
        Contact us
      </Link>
    </div>
  );
};
