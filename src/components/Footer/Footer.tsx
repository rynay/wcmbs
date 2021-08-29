import { Socials } from "../Socials";
import s from "./Footer.module.scss";

type Props = {
  type: "simple" | "complicated";
};

export const Footer = ({ type }: Props) => {
  return (
    <>
      {type === "simple" && (
        <footer className={`${s.footer} ${s.footer_fixed}`}>
          <div className={s.footer__left}>2017 © West Coast Cycling School</div>
          <div className={s.footer__right}>
            <a href="tel:+1 123 456 7890">+1 123 456 7890</a>
            <a href="mailto:contact@berider.com">contact@berider.com</a>
          </div>
        </footer>
      )}
      {type === "complicated" && (
        <footer className={s.footer}>
          <div className={s.footer__container}>
            <div className={s.footer__left}>
              <h3>About West Coast</h3>
              <p>
                Mountain Bike School Skills Coaching from the Experts. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, luctus
                pulvinar, hendrerit id, lorem.
              </p>
            </div>
            <div className={s.footer__middle}>
              <h3>Contacts</h3>
              <address>
                <div>2799 N Windsor Ave, Altadena, CA 91001, United States</div>
                <div>Tel: +1 (737) 999-1504</div>
                <div>Fax +1 (737) 999-1504</div>
                <div>E-mail: contact@berider.com</div>
              </address>
            </div>
            <div className={s.footer__right}>
              <h3>Follow Us</h3>
              <Socials />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
