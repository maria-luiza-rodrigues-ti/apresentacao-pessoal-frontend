import { ChevronDown } from "lucide-react";
import { ReactTyped } from "react-typed";

export function AboutSection() {
  function handleScrollToTechnologiesSection() {
    const technologiesSectionId = document.getElementById(
      "technologies-section"
    );

    if (technologiesSectionId === null) {
      return;
    }

    technologiesSectionId.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="mt-32 mb-16 max-w-5xl mx-auto z-20 relative h-[calc(100vh-16rem)] flex flex-col justify-between">
      <div>
        <h1 className="text-7xl text-center font-light">
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
              startDelay={7000}
              showCursor={false}
            />
          </span>
        </p>
      </div>
      <button
        onClick={handleScrollToTechnologiesSection}
        className="block mx-auto mt-32"
      >
        <ChevronDown
          size={64}
          className="text-white-70 hover:text-black dark:hover:text-white dark:text-neutral-1 transition-all"
        />
      </button>
    </section>
  );
}
