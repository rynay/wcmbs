import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./FirstScreen.module.scss";
import { pages } from "../../data/pages";

type Props = {
  page: "main" | "sub";
  image: string;
};

export const FirstScreen = ({ page, image }: Props) => {
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
          <Link to="/registration">Register now</Link>
          <Link to="/about">Learn more</Link>
        </>
      );
    } else {
      const pageInfo = pages.find((page) => page.path === location.pathname);
      if (!pageInfo) return;
      const breadCrumbs = [];
      const routes = location.pathname.split("/");
      for (const route of routes) {
        const routeInfo = pages.find(
          (page) => page.path === route || page.path.slice(1) === route
        );
        if (!routeInfo) continue;
        breadCrumbs.push(routeInfo);
      }
      setContent(
        <>
          <h1>{pageInfo.heading}</h1>
          <ul>
            {breadCrumbs.map((page) => (
              <Link key={page.path} to={page.anchor}>
                {page.heading}
              </Link>
            ))}
          </ul>
        </>
      );
    }
  }, [location]);

  return (
    <section className={page === "main" ? s.firstScreen_full : s.firstScreen}>
      <img className={s.firstScreen__image} src={image} alt="hero" />
      <div>{content}</div>
    </section>
  );
};
