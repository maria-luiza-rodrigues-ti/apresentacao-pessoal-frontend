import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { RiReactjsFill } from "react-icons/ri";
import { SiFastify, SiStyledcomponents } from "react-icons/si";

import { LazyLoadImage } from "react-lazy-load-image-component";

const recentProjetcs = [
  {
    id: 1,
    name: "Coffee Delivery",
    image: "/assets/coffee-delivery.webp",
    alt: "Página  de delivery de café com seleção e preços de cafés, com opções como Espresso, Latte e Mocha. Uma xícara de café com grãos e temperos é exibida na parte superior.",
    description:
      "Este projeto é uma aplicação de e-commerce onde é possível produtos (cafés) disponíveis para compra, adicionar uma quantidade específicas de itens no carrinho, aumentar ou remover a quantidade de itens no carrinho. Além disso, a quantidade de itens são mostrados no Header da aplicação.",
    technologies: [
      { id: 1, icon: <RiReactjsFill size={48} /> },
      { id: 2, icon: <SiStyledcomponents size={48} /> },
    ],
    github:
      "https://github.com/maria-luiza-rodrigues-ti/coffee-delivery-challenge",
    live: " https://maria-luiza-rodrigues-ti.github.io/coffee-delivery-challenge/",
  },
  {
    id: 2,
    name: "Entertainment Web App",
    image: "/assets/entertainment-web-app.webp",
    description:
      "Este é um projeto fullstack de uma plataforma de streaming, que ainda está em andamento. Nele será possível buscar filmes e séries, salvar como favorito e assistir aos filmes.",
    alt: "Captura de tela da interface de uma plataforma de streaming exibindo filmes em alta na parte superior, incluindo 'Planeta Terra' e 'Bottom Gear'. Abaixo, há uma seção 'Recomendado para você' com várias miniaturas de filmes, cada uma com classificações de usuários e botões de reprodução.",
    technologies: [
      { id: 1, icon: <RiReactjsFill size={48} /> },
      { id: 2, icon: <SiStyledcomponents size={48} /> },
      { id: 3, icon: <FaNodeJs size={48} /> },
      { id: 4, icon: <SiFastify size={48} /> },
    ],
    github: "https://github.com/maria-luiza-rodrigues-ti/entertainment-web-app",
    live: "https://entertainment-web-app-drab-omega.vercel.app/home",
  },
  {
    id: 3,
    name: "ToDo List",
    image: "/assets/todo-list.webp",
    alt: "Uma interface de aplicativo de lista de tarefas com tema escuro e uma barra de pesquisa na parte superior chamada 'Adicione uma nova tarefa'. Há três tarefas listadas abaixo, intituladas 'Desafio 1', 'Desafio 2' e 'Desafio 3', todas em 'Tarefas criadas'.",
    description:
      "O ToDo List é um gerenciador de tarefas intuitivo e responsivo que permite aos usuários organizar e priorizar suas atividades diárias de maneira eficiente. A aplicação foi desenvolvida com foco em boas práticas de desenvolvimento front-end.",
    technologies: [
      { id: 1, icon: <RiReactjsFill size={48} /> },
      { id: 2, icon: <FaCss3Alt size={48} /> },
    ],
    github: "https://github.com/maria-luiza-rodrigues-ti/todo-list",
    live: "https://mlrodrigues-todo-list.vercel.app",
  },
];

export function RecentProjectsSection() {
  return (
    <section id="projects" className="mb-32 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-left font-light mb-24">
        Projetos{" "}
        <span className="dark:text-white text-black font-semibold">
          recentes
        </span>
      </h2>
      <div className="space-y-24">
        {recentProjetcs.map((project) => {
          return (
            <article
              key={project.id}
              className={
                project.id % 2 === 0
                  ? "flex flex-wrap md:flex-row-reverse md:flex-nowrap gap-8"
                  : "flex flex-wrap md:flex-nowrap gap-8"
              }
            >
              <figure className="w-full md:w-1/2 h-96 rounded-2xl overflow-auto">
                <LazyLoadImage
                  src={import.meta.env.BASE_URL + project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="mt-auto w-full md:w-1/2">
                <h3 className="uppercase text-black dark:text-white font-semibold text-2xl md:text-3xl mb-4">
                  {project.name}
                </h3>
                <p className="mb-6">{project.description}</p>
                <ul className="flex flex-wrap gap-8">
                  {project.technologies.map((technologies) => (
                    <li
                      key={technologies.id}
                      className="text-black dark:text-white"
                    >
                      {technologies.icon}
                    </li>
                  ))}
                </ul>
                <div className="flex mt-8 gap-4">
                  <a
                    href={project.github}
                    className="flex
                    items-center
                    space-x-2
                    border-white-80
                    hover:text-white
                    transition-all 
                    duration-200
                    border border-black hover:border-white group dark:border-white
                    rounded-[100px]
                    px-4 py-2
                    hover:bg-light-background-gradient
                  "
                  >
                    <span className="text-black font-medium group-hover:text-white dark:text-white">
                      Github
                    </span>
                    <LuChevronRight size={24}></LuChevronRight>
                  </a>
                  <a
                    href={project.live}
                    className="flex
                    items-center
                    space-x-2
                    text-white-70
                    hover:text-white
                    transition-all 
                    border border-black hover:border-white dark:border-white
                    rounded-[100px]
                    px-4 py-2
                    hover:bg-light-background-gradient
                    group"
                  >
                    <span className="text-black font-medium group-hover:text-white dark:text-white">
                      Live
                    </span>
                    <LuChevronRight size={24}></LuChevronRight>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
