import BgGradient from "/assets/background-gradient-top.png";

import { Header } from "../../components/header";
import { ChevronDown } from "lucide-react";

export function Home() {
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
        <h1 className="text-7xl text-white-70 font-light text-center">
          <span className="">Oi, </span>
          <span>
            eu sou{" "}
            <strong className=" text-onyx dark:text-white font-extrabold">
              Maria Luiza {""}
            </strong>
            !
          </span>
        </h1>
        <p className="mt-20 max-w-4xl mx-auto text-2xl text-white-70 text-center">
          Sou uma desenvolvedora Front End comprometida em criar interfaces
          dinâmicas e acessíveis, aliando design responsivo com performance e
          usabilidade.
        </p>
        <a href="#technologies" className="flex justify-center mt-32">
          <ChevronDown size={64} className="text-white-70" />
        </a>
      </section>
      <section
        id="#technologies"
        className="mt-44 mb-56 max-w-5xl mx-auto"
      ></section>
    </>
  );
}
