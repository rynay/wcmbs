import { Route, Switch } from "react-router-dom";
import { FirstScreen } from "./components/FirstScreen";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Subscribe } from "./components/Subscribe";
import { About } from "./pages/About";
import { Coaches } from "./pages/Coaches";
import { Contact } from "./pages/Contact";
import { Courses } from "./pages/Courses";
import { FAQ } from "./pages/FAQ";
import { Gallery } from "./pages/Gallery";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header page="main" type="header" />
          <Footer type="simple" />
        </Route>
        <Route>
          <Header page="sub" type="header" />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="/coaches">
              <Coaches />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Subscribe />
          <Footer type="complicated" />
          <Header page="sub" type="footer" />
        </Route>
      </Switch>
    </>
  );
};
