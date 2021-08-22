import { Link as RLink, NavLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import s from "./Header.module.scss";
import { pages } from "../../data/pages";

type Props =
  | { type: "header"; page: "main" }
  | { type: "header"; page: "sub" }
  | { type: "footer"; page: "sub" };

export const Header = ({ type, page }: Props) => {
  return (
    <>
      <header id="top" className={s.header}>
        <div
          className={
            page === "main" ? s.header__container : s.header__container_maxWidth
          }
        >
          <div className={s.header__left}>
            <RLink className={s.header__logoLink} to="/">
              <img
                src="/images/mountain-bike.svg"
                alt="West Coast Moutain Bike School Logo"
              />
            </RLink>
          </div>
          <div className={s.header__middle}>
            <nav className={s.header__nav}>
              <ul>
                {pages.map((page) => (
                  <li key={page.anchor}>
                    <NavLink to={page.path}>{page.anchor}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {type === "footer" && (
              <p className={s.header__copyright}>
                © West Coast Cycling - Cycling Courses / Club Responsive Muse
                Template by Vinyljunkie
              </p>
            )}
          </div>
          <div className={s.header__right}>
            {type === "header" && (
              <div className={s.header__socials}>
                <a href="#1" aria-label="our facebook">
                  <img src="/images/facebook.svg" alt="facebook logo" />
                </a>
                <a href="#2" aria-label="our twitter">
                  <img src="/images/twitter.svg" alt="twitter logo" />
                </a>
                <a href="#3" aria-label="our instagram">
                  <img src="/images/instagram.svg" alt="instagram logo" />
                </a>
              </div>
            )}
            {type === "footer" && (
              <SLink
                className={s.header__toTopLink}
                to="#top"
                aria-label="scroll back to top"
              >
                ^
              </SLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
