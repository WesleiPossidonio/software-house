import { AboutMe, Header, Hero, Portfolio } from "./Components";
import { Companies } from "./Components/Companies";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Companies />
      <Portfolio />
    </>
  );
};
