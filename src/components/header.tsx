import { Github, Linkedin, Sun } from "lucide-react";

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
  return (
    <header>
      <div
        className="
      flex justify-between items-center 
      p-4 max-w-5xl mx-auto mt-8
      bg-white-25 dark:bg-dark-header-bg backdrop-blur-[2px]
      border rounded-xl border-white-25 dark:border-dark-header-bg"
      >
        <nav>
          <ul className="flex gap-10">
            <li>
              <a href="/">Logo</a>
            </li>
            {menuOptions.map((option) => (
              <li key={option.name}>
                <a href={option.href}>{option.name}</a>
              </li>
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
              <Sun />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
