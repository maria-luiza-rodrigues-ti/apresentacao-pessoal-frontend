import { LuChevronRight } from "react-icons/lu";

const recentProjetcs = [
  {
    id: 1,
    name: "Coffee Delivery",
    image: "/assets/coffee-delivery.png",
    description:
      "Este projeto é uma aplicação de e-commerce onde é possível produtos (cafés) disponíveis para compra, adicionar uma quantidade específicas de itens no carrinho, aumentar ou remover a quantidade de itens no carrinho. Além disso, a quantidade de itens são mostrados no Header da aplicação.",
    technologies: ["React", "Styled Components"],
    github:
      "https://github.com/maria-luiza-rodrigues-ti/coffee-delivery-challenge",
    live: " https://maria-luiza-rodrigues-ti.github.io/coffee-delivery-challenge/",
  },
  {
    id: 2,
    name: "Entertainment Web App",
    image: "/assets/entertainment-web-app.png",
    description:
      "Este é um projeto fullstack de uma plataforma de streaming, que ainda está em andamento. Nele será possível buscar filmes e séries, salvar como favorito e assistir aos filmes.",
    technologies: ["React", "Styled Components", "NodeJS", "Fastify"],
    github: "https://github.com/maria-luiza-rodrigues-ti/entertainment-web-app",
    live: "https://entertainment-web-app-drab-omega.vercel.app/home",
  },
  {
    id: 3,
    name: "ToDo List",
    image: "/assets/todo-list.png",
    description:
      "O ToDo List é um gerenciador de tarefas intuitivo e responsivo que permite aos usuários organizar e priorizar suas atividades diárias de maneira eficiente. A aplicação foi desenvolvida com foco em boas práticas de desenvolvimento front-end.",
    technologies: ["React", "CSS"],
    github: "https://github.com/maria-luiza-rodrigues-ti/todo-list",
    live: "https://mlrodrigues-todo-list.vercel.app",
  },
];

export function RecentProjectsSection() {
  return (
    <section id="#recents-projects" className="mb-32 max-w-5xl mx-auto">
      <h2 className="text-4xl text-white-70 text-left font-light mb-24">
        Alguns dos meus{" "}
        <strong className="font-semibold text-black">projetos recentes</strong>
      </h2>
      <div className="space-y-24">
        {recentProjetcs.map((project) => {
          return (
            <article
              key={project.id}
              className={
                project.id % 2 === 0
                  ? "flex flex-row-reverse gap-8"
                  : "flex gap-8"
              }
            >
              <figure className="w-1/2 h-96 rounded-2xl overflow-auto">
                <img
                  src={import.meta.env.BASE_URL + project.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="mt-auto w-1/2">
                <h3 className="uppercase text-white font-semibold text-3xl mb-4">
                  {project.name}
                </h3>
                <p className="mb-6">{project.description}</p>
                <ul>
                  {project.technologies.map((technologies) => (
                    <li key={technologies}>{technologies}</li>
                  ))}
                </ul>
                <div className="flex mt-8 gap-6">
                  <a
                    href={project.github}
                    className="flex
                    items-center
                    space-x-2
                    text-white-70
                    hover:text-white
                    transition-colors 
                    border
                    rounded-[100px]
                    px-4 py-2"
                  >
                    <span>Github</span>
                    <LuChevronRight size={24}></LuChevronRight>
                  </a>
                  <a
                    href={project.live}
                    className="flex
                    items-center
                    space-x-2
                    text-white-70
                    hover:text-white
                    transition-colors 
                    border
                    rounded-[100px]
                    px-4 py-2"
                  >
                    <span>Live</span>
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
