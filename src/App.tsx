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
      <Header type="header" />
      <FirstScreen />
      <Switch>
        <Route path="/" exact>
          <Footer type="simple" />
        </Route>
        <Route>
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
          <Header type="footer" />
        </Route>
      </Switch>
    </>
  );
};
