import {
  AboutMe,
  CallAction,
  Coments,
  Companies,
  Contact,
  Header,
  Hero,
  Portfolio,
} from "./Components";
import { Footer } from "./Components/Footer";
import TimelineSection from "./Components/TimelineSection";

export const Home = () => {
  return (
    <main className="w-full h-full bg-base text-white">
      <Header />
      <Hero />
      <AboutMe />
      <Companies />
      <Portfolio />
      <CallAction />
      <TimelineSection />
      <Coments />
      <Contact />
      <Footer />
    </main>
  );
};
