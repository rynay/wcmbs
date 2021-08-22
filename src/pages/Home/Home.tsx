import { FirstScreen } from "../../components/FirstScreen";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header page="main" type="header" />
      <FirstScreen page="main" image="/images/hero.jpg" />
      <Footer type="simple" />
    </>
  );
};
