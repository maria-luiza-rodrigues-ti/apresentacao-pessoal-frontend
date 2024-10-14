import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-32 mb-16 max-w-5xl mx-auto relative h-[calc(100vh-16rem)] flex flex-col justify-between"
    >
      <div>
        <h1 className="text-5xl md:text-7xl text-center font-light">
          <ReactTyped strings={["Eu sou "]} typeSpeed={40} showCursor={false} />{" "}
          <strong className="font-semibold text-black dark:text-white">
            <ReactTyped
              strings={[" Maria Luiza."]}
              typeSpeed={50}
              startDelay={300}
              showCursor={false}
            />
          </strong>
        </h1>
        <p className="mt-20 max-w-5xl mx-auto text-xl md:text-2xl dark:text-neutral-2 text-center font-light">
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
              startDelay={7000}
              showCursor={false}
            />
          </span>
        </p>
      </div>
      <Link
        to="#technologies"
        className="block mx-auto mt-32"
        aria-label="Ir para seção de tecnologias"
      >
        <ChevronDown
          size={64}
          className="text-white-70 hover:text-black dark:hover:text-white dark:text-neutral-1 transition-all"
        />
      </Link>
    </section>
  );
}
