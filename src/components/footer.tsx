import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import BgGradient from "/assets/background-gradient-top.png";

export function Footer() {
  return (
    <footer className="relative text-white-70 text-sm mx-auto">
      <img src={BgGradient} alt="" className="w-full h-auto block rotate-180" />

      <div className="absolute max-w-5xl mx-auto inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl mb-1">
          Entre <strong>em contato.</strong>
        </h2>
        <span className="text-xl">Para conversarmos mais...</span>
      </div>
      <nav className="absolute max-w-5xl mx-auto bottom-10 inset-x-0 text-center">
        <ul className="inline-flex space-x-6">
          <li>
            <a href="">
              <MdEmail size={48} />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub size={48} />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin size={48} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
