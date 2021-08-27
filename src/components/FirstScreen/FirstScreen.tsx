import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./FirstScreen.module.scss";
import { pages } from "../../data/pages";

export const FirstScreen = () => {
  const location = useLocation();
  const [content, setContent] = useState<ReactElement>();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setContent(
        <>
          <h1>
            <span>West Coast</span>
            <br />
            <span>Mountain Bike School</span>
          </h1>
          <p>
            Upgrade your skills to the next level. Start training with pro
            riders today!
          </p>
          <div>
            <Link
              className={
                s.firstScreen__link + " " + s.firstScreen__link_registration
              }
              to="/courses/registration"
            >
              Register now
            </Link>
            <Link
              className={s.firstScreen__link + " " + s.firstScreen__link_about}
              to="/about"
            >
              Learn more
            </Link>
          </div>
        </>
      );
    } else {
      const pageInfo = pages.find((page) => page.path === location.pathname);
      if (!pageInfo) return;
      const breadCrumbs = [];
      const routes = location.pathname.split("/");
      for (const route of routes) {
        const routeInfo = pages.find(
          (page) =>
            page.path === route ||
            page.path.split("/")[page.path.split("/").length - 1] === route
        );
        if (!routeInfo) continue;
        breadCrumbs.push(routeInfo);
      }
      setContent(
        <>
          <h1>{pageInfo.heading}</h1>
          <div>
            {breadCrumbs.map((page) => (
              <Link
                className={s.firstScreen__breadCrumb}
                key={page.path}
                to={page.path}
              >
                {page.heading}
              </Link>
            ))}
          </div>
        </>
      );
    }
  }, [location]);

  return (
    <section
      className={location.pathname === "/" ? s.firstScreen_full : s.firstScreen}
    >
      <img
        className={s.firstScreen__image}
        src={
          location.pathname === "/"
            ? `/images/hero.jpg`
            : `/images/${
                location.pathname.split("/")[
                  location.pathname.split("/").length - 1
                ]
              }.jpg`
        }
        alt="hero"
      />
      <div className={s.firstScreen__content}>{content}</div>
    </section>
  );
};
