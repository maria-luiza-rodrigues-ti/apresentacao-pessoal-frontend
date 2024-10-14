import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import BgGradient from "/assets/background-gradient-top.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Footer() {
  return (
    <footer className="relative text-white-70 text-sm mx-auto" id="contact">
      <LazyLoadImage
        src={BgGradient}
        alt="Um gradiente vibrante em transição de azul para roxo, vermelho e laranja, formando um padrão semicircular em um fundo transparente."
        className="w-full h-auto block rotate-180"
      />

      <div className="absolute max-w-5xl mx-auto bottom-32 inset-x-0 md:inset-0 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl mb-1">
          Entre{" "}
          <strong className="font-semibold text-black dark:text-white">
            em contato,
          </strong>
        </h2>
        <span className="text-xl mt-2">Para conversarmos mais</span>
      </div>
      <nav className="absolute max-w-5xl mx-auto -bottom-0 md:bottom-10 inset-x-0 text-center mb-8">
        <ul className="flex flex-row gap-20 justify-center items-center">
          <li>
            <a href="mailto:marialuiza.r.eng@gmail.com">
              <MdEmail size={48} className="text-black dark:text-white" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/maria-luiza-rodrigues-ti"
              className="text-black dark:text-white"
              aria-label="Acesse o Github de Maria Luiza Rodrigues"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={48} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maria-luiza-rodrigues-ti/"
              className="text-black dark:text-white"
              aria-label="Acesse o Github de Maria Luiza Rodrigues"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={48} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
