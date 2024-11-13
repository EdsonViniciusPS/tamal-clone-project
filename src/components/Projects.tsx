const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack application built with React and Node.js",
      image: "https://picsum.photos/600/400",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Project Two",
      description: "Mobile-first web application with real-time features",
      image: "https://picsum.photos/600/401",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "E-commerce platform with advanced filtering",
      image: "https://picsum.photos/600/402",
      tags: ["React", "Redux", "Node.js"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;