import { ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Header } from "../../components/header";
import { splitStringUsingRegex } from "../../utils/splitStringUsingRegex";

import BgGradient from "/assets/background-gradient-top.png";

const heading = "Oi, eu sou Maria Luiza!";
const description =
  "Sou uma Desenvolvedora Front End com experiência em React, TypeScript e plataformas de e-commerce. Comprometida em criar interfaces dinâmicas e acessíveis, aliando design responsivo com performance e usabilidade.";

const CharacterVariants: Variants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export function Home() {
  const headingCharacters = splitStringUsingRegex(heading);
  const descriptionCharacters = splitStringUsingRegex(description);

  return (
    <>
      <img
        src={BgGradient}
        alt=""
        className="absolute -z-10 inset-0 
        bg-center bg-no-repeat bg-contain 
        mx-auto"
      />
      <Header />
      <section className="mt-44 mb-56 max-w-5xl mx-auto">
        <motion.h1
          initial="hidden"
          whileInView={"reveal"}
          transition={{ staggerChildren: 0.02 }}
          className="text-7xl text-white font-extrabold text-center"
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
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView={"reveal"}
          transition={{ staggerChildren: 0.02 }}
          className="mt-20 max-w-5xl mx-auto text-2xl text-white text-center font-light"
        >
          {descriptionCharacters.map((character) => (
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
      <section
        id="#technologies"
        className="mt-44 mb-56 max-w-5xl mx-auto"
      ></section>
    </>
  );
}
