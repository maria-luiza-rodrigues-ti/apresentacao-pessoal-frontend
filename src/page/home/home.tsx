import { ChevronDown } from "lucide-react";
import { ReactTyped } from "react-typed";

import { Header } from "../../components/header";

import BgGradient from "/assets/background-gradient-top.png";
import { TechnologiesSection } from "./components/technologies-section";
import { RecentProjectsSection } from "./components/recent-projects-section";
import { Footer } from "../../components/footer";

export function Home() {
  return (
    <div className="relative bg-white text-black/80 font-light dark:bg-white-25 backdrop-blur-[2px] dark:bg-dark-background-gradient dark:text-dark-neutral-2 scroll-smooth pt-8">
      <img
        src={BgGradient}
        alt=""
        className="absolute z-0 inset-0 
        bg-center bg-no-repeat bg-contain 
        mx-auto"
      />
      <div className="">
        <Header />
        <section className="mt-32 mb-32 max-w-5xl mx-auto z-20 relative ">
          <h1 className="text-7xl text-center font-light">
            <ReactTyped
              strings={["Eu sou "]}
              typeSpeed={40}
              showCursor={false}
            />{" "}
            <strong className="font-semibold text-black dark:text-white">
              <ReactTyped
                strings={[" Maria Luiza."]}
                typeSpeed={50}
                startDelay={300}
                showCursor={false}
              />
            </strong>
          </h1>
          <p className="mt-20 max-w-5xl mx-auto text-2xl dark:text-neutral-2 text-center font-light">
            <strong className="font-semibold text-black dark:text-white">
              <ReactTyped
                strings={["Desenvolvedora Front-end"]}
                typeSpeed={60}
                startDelay={200}
                showCursor={false}
              />
            </strong>{" "}
            <span>
              <ReactTyped
                strings={[" com experiência em"]}
                typeSpeed={60}
                startDelay={2000}
                showCursor={false}
              />
            </span>{" "}
            <strong className="font-semibold text-black dark:text-white">
              <ReactTyped
                strings={["React, TypeScript e plataformas de e-commerce"]}
                typeSpeed={60}
                startDelay={3500}
                showCursor={false}
              />
            </strong>
            <span>
              <ReactTyped
                strings={[
                  ". Comprometida em criar interfaces dinâmicas e acessíveis, aliando design responsivo com performance e usabilidade.",
                ]}
                typeSpeed={60}
                startDelay={6500}
                showCursor={false}
              />
            </span>
          </p>
          <a href="#technologies" className="flex justify-center mt-32">
            <ChevronDown
              size={64}
              className="text-white-70 hover:text-black dark:hover:text-white dark:text-neutral-1 transition-all"
            />
          </a>
        </section>
        <TechnologiesSection />
        <RecentProjectsSection />
        <Footer />
      </div>
    </div>
  );
}
