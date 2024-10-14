import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

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

export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex relative">
      <button onClick={handleToggleMenu}>
        <LuMenu size={32} />
      </button>

      {isOpen ? (
        <div className="absolute z-99 top-[45px] left-[-24px] w-[calc(100vw-2.5rem)] z-30 bg-black/50 p-5 border border-black/30 rounded-xl space-5">
          <nav>
            <ul>
              {menuOptions.map((option) => (
                <li key={option.name}>
                  <Link to={option.href} className="text-white font-semibold">
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
