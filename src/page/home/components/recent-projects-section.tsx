const recentProjetcs = [
  {
    id: 1,
    name: "Coffee Delivery",
    image: "/assets/coffee-delivery.png",
    description: "Descrição do projeto 1",
    technologies: ["React", "Styled Components"],
    github:
      "https://github.com/maria-luiza-rodrigues-ti/coffee-delivery-challenge",
    live: " https://maria-luiza-rodrigues-ti.github.io/coffee-delivery-challenge/",
  },
  {
    id: 2,
    name: "Entertainment Web App",
    image: "/assets/entertainment-web-app.png",
    description: "Descrição do projeto 1",
    technologies: ["React", "Styled Components", "NodeJS", "Fastify"],
    github: "https://github.com/maria-luiza-rodrigues-ti/entertainment-web-app",
    live: "https://entertainment-web-app-drab-omega.vercel.app/home",
  },
  {
    id: 3,
    name: "ToDo List",
    image: "/assets/todo-list.png",
    description: "Descrição do projeto 1",
    technologies: ["React", "CSS"],
    github: "https://github.com/maria-luiza-rodrigues-ti/todo-list",
    live: "https://mlrodrigues-todo-list.vercel.app",
  },
];

export function RecentProjectsSection() {
  return (
    <section id="#recents-projects" className="mb-32 max-w-5xl mx-auto">
      <h2 className="text-7xl text-white font-extrabold text-center">
        Projetos Recentes
      </h2>
      {recentProjetcs.map((project) => {
        return (
          <article key={project.id}>
            <figure>
              <img src={import.meta.env.BASE_URL + project.image} alt="" />
            </figure>
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((technologies) => (
                  <li key={technologies}>{technologies}</li>
                ))}
              </ul>
              <div>
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Line</a>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
