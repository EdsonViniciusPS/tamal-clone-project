const Contact = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Twitter", url: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-secondary mb-8">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;