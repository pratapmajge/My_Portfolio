import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Online Examination Portal",
    description: "A secure platform to conduct exams with proctoring features.",
    image: "/projects/project1.png",
    tags: ["React Js", "TailwindCSS", "Express Js", "Node Js", "MongoDB", "Tensorflow"],
    demoUrl: "#",
    githubUrl: "https://github.com/pratapmajge/Online_Exam_Portal2",
  },
  {
    id: 2,
    title: "News Portal",
    description:
      "An interactive web application that manages multiple news channles and gives attractive user experience",
    image: "/projects/image.png",
    tags: ["PHP", "Javascript", "HTML", "CSS","MySql"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "Full-featured currency converter platform with allcurrencies in the world..",
    image: "/projects/project3.png", 
    tags: ["React", "Node.js", "MongoDB","Express Js"],
    demoUrl: "#",
    githubUrl: "https://github.com/pratapmajge/Currency_Converter",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <Link
                      to={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            to="https://github.com/pratapmajge"
          >
            Check My Github <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
