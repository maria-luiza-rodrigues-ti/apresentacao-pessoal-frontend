import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  }, []);

  function handleDarkAdnLightMode() {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark");
  }

  return (
    <header>
      <div
        className="
      flex justify-between items-center 
      p-4 max-w-5xl mx-auto mt-8
      bg-white-25 dark:bg-white-25 backdrop-blur-[2px]
      border rounded-xl border-white-25 dark:border-dark-header-bg transition-all duration-300"
      >
        <nav>
          <ul className="flex gap-10 text-white">
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="/">Logo</a>
            </motion.li>
            {menuOptions.map((option) => (
              <motion.li key={option.name}>
                <a href={option.href}>{option.name}</a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="">
                <Github />
              </a>
            </li>
            <li className="border-l pl-6">
              <button onClick={handleDarkAdnLightMode}>
                {darkMode ? <Sun /> : <Moon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
