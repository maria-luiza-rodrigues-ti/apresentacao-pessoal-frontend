import BgGradient from "/assets/background-gradient-top.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Header } from "../../components/header";
import { TechnologiesSection } from "./components/technologies-section";
import { RecentProjectsSection } from "./components/recent-projects-section";
import { Footer } from "../../components/footer";
import { AboutSection } from "./components/about-section";

export function Home() {
  return (
    <div className="relative bg-white text-black/80 font-light dark:dark-background-gradient backdrop-blur-[2px] dark:bg-dark-background-gradient dark:text-dark-neutral-2 scroll-smooth px-5 md:px-0 pt-5 md:pt-8">
      <LazyLoadImage
        src={BgGradient}
        alt="Um gradiente vibrante em transição de azul para roxo, vermelho e laranja, formando um padrão semicircular em um fundo transparente."
        className="absolute z-0 inset-0 
        bg-center bg-no-repeat bg-contain 
        mx-auto"
      />
      <div className="">
        <Header />
        <AboutSection />
        <TechnologiesSection />
        <RecentProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
