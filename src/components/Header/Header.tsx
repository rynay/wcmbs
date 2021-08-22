import { Link as RLink, NavLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import s from "./Header.module.scss";
import { pages } from "../../data/pages";
import { Facebook } from "../icons/Facebook";
import { Logo } from "../icons/Logo";
import { Twitter } from "../icons/Twitter";
import { Instagram } from "../icons/Instagram";
import { Up } from "../icons/Up";

type Props =
  | { type: "header"; page: "main" }
  | { type: "header"; page: "sub" }
  | { type: "footer"; page: "sub" };

export const Header = ({ type, page }: Props) => {
  const content = (
    <div
      className={
        page === "main" ? s.header__container : s.header__container_maxWidth
      }
    >
      <div className={s.header__left}>
        <RLink className={s.header__logoLink} to="/">
          <Logo />
        </RLink>
      </div>
      <div className={s.header__middle}>
        <nav className={s.header__nav}>
          <ul>
            {pages.map((page) => (
              <li key={page.anchor}>
                <NavLink className={s.header__navLink} to={page.path}>
                  {page.anchor}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {type === "footer" && (
          <p className={s.header__copyright}>
            © West Coast Cycling - Cycling Courses <br /> Builded by{" "}
            <a href="https://github.com/Rynay" target="_blank" rel="noreferrer">
              Rynay
            </a>{" "}
            / Template by{" "}
            <a
              href="https://themeforest.net/user/vinyljunkie"
              target="_blank"
              rel="noreferrer"
            >
              Vinyljunkie
            </a>
          </p>
        )}
      </div>
      <div className={s.header__right}>
        {type === "header" && (
          <div className={s.header__socials}>
            <a href="#1" aria-label="our facebook">
              <Facebook />
            </a>
            <a href="#2" aria-label="our twitter">
              <Twitter />
            </a>
            <a href="#3" aria-label="our instagram">
              <Instagram />
            </a>
          </div>
        )}
        {type === "footer" && (
          <SLink
            className={s.header__toTopLink}
            to="top"
            aria-label="scroll back to top"
          >
            <Up />
          </SLink>
        )}
      </div>
    </div>
  );

  return (
    <>
      {type === "header" && (
        <header id="top" className={`${s.header} ${s.header_top}`}>
          {content}
        </header>
      )}
      {type === "footer" && (
        <div id="bottom" className={`${s.header} ${s.header_bottom}`}>
          {content}
        </div>
      )}
    </>
  );
};
