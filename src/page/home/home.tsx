import BgGradient from "/assets/background-gradient-top.png";

import { Header } from "../../components/header";

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
        <div className="w-3/4">
          <h1 className="text-7xl text-dark-gray font-bold">
            <span className="">Oi, </span>
            sou {""}
            <strong className=" text-onyx dark:text-white font-extrabold">
              Maria Luiza
            </strong>
          </h1>
          <p className="mt-10 max-w-xl text-2xl text-dark-gray">
            Desenvolvedora Front End comprometida em criar interfaces dinâmicas
            e acessíveis, aliando design responsivo com performance e
            usabilidade.
          </p>
          <ul className="mt-10 flex gap-4 ">
            <li>
              <a
                href=""
                className="py-4 px-8 rounded-lg
                block
               dark:bg-onyx 
                darK:active:bg-gradient-to-r dark:active:from-dark-main-bg dark:active:to-card-bg dark: dark:active:text-white 
                dark:active:shadow-button"
              >
                Veja meu currículo
              </a>
            </li>
            <li>
              <a
                href=""
                className="py-4 px-8 rounded-lg
                block
               dark:bg-onyx 
                darK:active:bg-gradient-to-r dark:active:from-dark-main-bg dark:active:to-card-bg dark: dark:active:text-white 
                dark:active:shadow-button"
              >
                Entre em contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
    </>
  );
}
