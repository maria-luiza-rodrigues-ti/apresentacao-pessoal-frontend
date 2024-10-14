import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";
import { Link } from "react-router-dom";

import { HeaderMobile } from "./header/header-mobile";

const menuOptions = [
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Tecnologias",
    href: "#technologies",
  },
  {
    name: "Projetos",
    href: "#projects",
  },

  {
    name: "Contato",
    href: "#contact",
  },
];

export function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (prefersColorScheme.matches) {
      setDarkMode(true);
    }
  }, []);

  function handleDarkAdnLightMode() {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark");
  }

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <header>
      <div
        className=" relative
      flex justify-between items-center 
      py-2 px-6  max-w-5xl mx-auto
      bg-black/50 text-white dark:text-dark-neutral-1 dark:bg-white/25 backdrop-blur-[2px]
      border rounded-xl border-black/30 dark:border-bg-white/10 transition-all duration-300
      z-20"
      >
        {isMobile ? (
          <HeaderMobile />
        ) : (
          <nav>
            <ul className="flex gap-10 text-white font-semibold">
              {menuOptions.map((option) => (
                <motion.li whileHover={{ fontSize: "20px" }} key={option.name}>
                  <Link reloadDocument to={option.href}>
                    {option.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        )}

        <nav className="text-white">
          <ul className="flex gap-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="">
                <FaLinkedin size={32} />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="">
                <FaGithub size={32} />
              </a>
            </motion.li>
            {isMobile ? (
              ""
            ) : (
              <li className="border-l pl-6">
                <button onClick={handleDarkAdnLightMode} className="flex">
                  {darkMode ? <LuSun size={32} /> : <LuMoon size={32} />}
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
