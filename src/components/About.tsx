const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Next.js",
    "Tailwind CSS", "GraphQL", "PostgreSQL", "AWS"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-secondary mb-6">
              I'm a passionate developer who loves creating beautiful and functional web applications.
              With several years of experience in full-stack development, I focus on building
              scalable solutions that solve real-world problems.
            </p>
            <p className="text-lg text-secondary">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary/10 rounded-full text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;