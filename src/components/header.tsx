import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";

const menuOptions = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Tech Stack",
    href: "/tech-stack",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    if (prefersColorScheme.matches) {
      setDarkMode(true);
    }
    console.log("1", darkMode);
  }, []);

  function handleDarkAdnLightMode() {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark");
  }

  return (
    <header>
      <div
        className=" relative
      flex justify-between items-center 
      py-2 px-6  max-w-5xl mx-auto
      bg-black/50 text-white dark:bg-white-25 backdrop-blur-[2px]
      border rounded-xl border-black/30 dark:border-dark-header-bg transition-all duration-300
      z-20"
      >
        <nav>
          <ul className="flex gap-10 text-white font-semibold">
            {menuOptions.map((option) => (
              <motion.li whileHover={{ fontSize: "20px" }} key={option.name}>
                <a href={option.href}>{option.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <nav>
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
            <li className="border-l pl-6">
              <button onClick={handleDarkAdnLightMode} className="flex">
                {darkMode ? <LuSun size={32} /> : <LuMoon size={32} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
