import {
  AboutMe,
  CallAction,
  Companies,
  Header,
  Hero,
  Portfolio,
} from "./Components";
import TimelineSection from "./Components/TimelineSection";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Companies />
      <Portfolio />
      <CallAction />
      <TimelineSection />
    </>
  );
};
