import Cursor from "./components/default/cursor";
import Navigation from "./components/default/navigation";
import Footer from "./components/footer/footer";
import HeroSection from "./components/heroSection/heroSection";
import OurStack from "./components/main/ourStack/ourStack";
import Projects from "./components/main/projects/projects";
import ProjectsCardsContainer from "./components/main/projects/projectsCards";

export default function Home() {
  return (
    <>
      <Navigation />
      <Cursor />
      <HeroSection />
      <Projects />
      <ProjectsCardsContainer />
      <OurStack />
      <Footer />
    </>
  );
}
