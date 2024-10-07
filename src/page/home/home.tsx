import { ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Header } from "../../components/header";
import { splitStringUsingRegex } from "../../utils/splitStringUsingRegex";

import BgGradient from "/assets/background-gradient-top.png";
import { TechnologiesSection } from "./components/technologies-section";
import { RecentProjectsSection } from "./components/recent-projects-section";
import { Footer } from "../../components/footer";

const heading = "Oi, sou ";
const name = "Maria Luiza.";
const occupation = "Desenvolvedora Front-end ";
const descriptionFirstPart = "com experiência em ";
const technologies = "React, TypeScript e plataformas de e-commerce";
const descriptionSecondPart =
  ". Comprometida em criar interfaces dinâmicas e acessíveis, aliando design responsivo com performance e usabilidade.";

const CharacterVariants: Variants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export function Home() {
  const headingCharacters = splitStringUsingRegex(heading);
  const nameCharacters = splitStringUsingRegex(name);
  const occupationCharacters = splitStringUsingRegex(occupation);
  const descriptionFirstPartCharacters =
    splitStringUsingRegex(descriptionFirstPart);
  const technologiesCharacters = splitStringUsingRegex(technologies);
  const descriptionSecondPartCharacters = splitStringUsingRegex(
    descriptionSecondPart
  );

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
          <motion.h1
            initial="hidden"
            whileInView={"reveal"}
            transition={{ staggerChildren: 0.02 }}
            className="text-7xl text-center"
          >
            {headingCharacters.map((character) => (
              <motion.span
                key={character}
                transition={{ duration: 0.5 }}
                variants={CharacterVariants}
              >
                {character}
              </motion.span>
            ))}
            {nameCharacters.map((character) => (
              <motion.strong
                key={character}
                transition={{ duration: 0.5 }}
                variants={CharacterVariants}
                className="font-semibold"
              >
                {character}
              </motion.strong>
            ))}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView={"reveal"}
            transition={{ staggerChildren: 0.02 }}
            className="mt-20 max-w-5xl mx-auto text-2xl dark:text-neutral-2 text-center font-light"
          >
            {occupationCharacters.map((character) => (
              <motion.strong
                key={character}
                transition={{ duration: 0.35 }}
                variants={CharacterVariants}
                className="font-semibold"
              >
                {character}
              </motion.strong>
            ))}
            {descriptionFirstPartCharacters.map((character) => (
              <motion.span
                key={character}
                transition={{ duration: 0.35 }}
                variants={CharacterVariants}
              >
                {character}
              </motion.span>
            ))}
            {technologiesCharacters.map((character) => (
              <motion.strong
                key={character}
                transition={{ duration: 0.35 }}
                variants={CharacterVariants}
                className="font-semibold"
              >
                {character}
              </motion.strong>
            ))}
            {descriptionSecondPartCharacters.map((character) => (
              <motion.span
                key={character}
                transition={{ duration: 0.35 }}
                variants={CharacterVariants}
              >
                {character}
              </motion.span>
            ))}
          </motion.p>
          <a href="#technologies" className="flex justify-center mt-32">
            <ChevronDown
              size={64}
              className="text-white-70 hover:text-white transition-all"
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
