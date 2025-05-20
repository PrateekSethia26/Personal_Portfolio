import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: " SyncDraw: Real-Time Collaborative Drawing Tool",
      description:
        "Developing a real-time collaborative drawing tool with multi-user interaction using Next.js (front-end) and Node.js (back-end), integrated with WebSockets for live synchronization.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500",
      technologies: [
        "Next.js",
        "Node.js",
        "Fabric.js",
        "Tailwind CSS",
        "MongoDB",
        "Clerk",
        "Socket.IO",
      ],
      github:
        "https://github.com/PrateekSethia26/CollabDraw-Real-Time-Interactive-Whiteboard-for-Seamless-Collaboration",
      liveDemo: "",
    },
    {
      title: "Todo App",
      description:
        "This is a simple Todo app where you can add tasks to be completed, mark tasks as completed, and delete older tasks. The app is designed to help you stay organized and manage your tasks efficiently.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/PrateekSethia26/TodoApp",
      liveDemo: "https://pstodoapp.netlify.app/",
    },
    {
      title: " Pulse of Thoughts: A Journey Through Ideas and Insights",
      description:
        "Developing a full-stack blog application using React, Node.js, Express, and MongoDB, featuring responsive UI,secure user authentication, and efficient CRUD operations.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "MongoDB",
      ],
      github: "https://github.com/PrateekSethia26/Pulse_of_Thoughts",
      liveDemo: "",
    },
    {
      title: "Youtube Clone",
      description:
        "A full-featured video streaming web application that replicates core functionalities of YouTube. Built using modern web technologies, it offers an intuitive interface for browsing, watching videos",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=500",
      technologies: ["React.js", "Tailwind CSS", "Rapid API"],
      github: "https://github.com/PrateekSethia26/youtube-clone",
      liveDemo: "https://ps-ytclone.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-slate dark:text-slate-light mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:text-green transition"
                  >
                    <Github size={18} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:text-green transition"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
