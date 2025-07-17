import { motion } from "framer-motion";
import { Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce",
      description:
        "A  e-commerce platform with  user authentication, product management, and a seamless shopping experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/example",
      image: "bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500",
      accent: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
      title: "Complete Bazaar",
      description:
        "A collaborative marketplace platform enabling real-time product listings, team management, and streamlined transactions for buyers and sellers.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
      github: "https://github.com/example",
      image: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
      accent: "from-emerald-400 to-teal-400",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website to showcase my projects, skills, and experience with smooth animations and a clean UI.",
      technologies: ["React.js", "Tailwind CSS"],
      liveDemo: "https://example.com",
      image: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
      accent: "from-orange-400 to-red-400",
    },
  ];

  return (
    <motion.section
      className="flex min-h-screen w-full flex-col items-center justify-center space-y-10 bg-[#0a0f1c] py-10 sm:space-y-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="space-y-6 text-center sm:space-y-8">
        <div className="relative">
          <h2 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-3xl font-black text-transparent sm:text-5xl md:text-7xl">
            My Projects
          </h2>
          <div className="absolute -top-2 -right-2 text-2xl sm:-top-4 sm:-right-4 sm:text-4xl">
            ✨
          </div>
        </div>
        <p className="mx-auto max-w-md text-base leading-relaxed text-gray-400 sm:max-w-2xl sm:text-xl">
          {/* This component displays a list of portfolio projects with details and links. */}
          {/* Project data is stored in an array and mapped to UI cards. */}
          {/* Uses Framer Motion for animation and lucide-react for icons. */}
          {/* Each project card shows title, description, technologies, and links to GitHub/live demo. */}
          Dive into my portfolio and see the solutions I've brought to life with
          modern technology and creative design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 px-2 sm:max-w-4xl sm:gap-8 sm:px-6 md:max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        {/* Map each project to a card */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative h-[420px] w-full overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-b from-gray-800/60 to-gray-900/80 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 sm:h-[520px] sm:rounded-3xl"
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            {/* Project Image/Preview */}
            <div
              className={`relative h-32 w-full sm:h-48 ${project.image} flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating elements for visual effect */}
              <div className="absolute top-2 right-2 h-2 w-2 animate-pulse rounded-full bg-white/40 sm:top-4 sm:right-4 sm:h-3 sm:w-3"></div>
              <div className="absolute top-4 right-4 h-1.5 w-1.5 animate-pulse rounded-full bg-white/30 delay-300 sm:top-8 sm:right-8 sm:h-2 sm:w-2"></div>

              {/* Project title and accent line */}
              <div className="relative z-10 text-center">
                <h3 className="mb-1 text-xl font-bold text-white drop-shadow-lg sm:mb-2 sm:text-3xl">
                  {project.title}
                </h3>
                <div
                  className={`h-0.5 w-10 bg-gradient-to-r sm:h-1 sm:w-16 ${project.accent} mx-auto rounded-full`}
                ></div>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex h-[220px] flex-col space-y-3 p-4 sm:h-[272px] sm:space-y-4 sm:p-8">
              {/* Title with accent */}
              <div>
                <h3 className="text-lg font-bold text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl">
                  {project.title}
                </h3>
                <div
                  className={`h-0.5 w-8 bg-gradient-to-r sm:w-12 ${project.accent} rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-20`}
                ></div>
              </div>

              {/* Description */}
              <p className="flex-1 text-xs leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200 sm:text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md border border-blue-400 bg-[#1f2937]/90 px-2 py-0.5 text-[10px] font-medium text-white shadow-sm backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex-1 overflow-hidden rounded-lg border border-gray-600/50 bg-gray-700/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500/50 hover:bg-gray-600/80 hover:shadow-lg hover:shadow-gray-500/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-700 group-hover/btn:translate-x-full"></div>
                  <div className="relative flex items-center justify-center gap-1 sm:gap-2">
                    <Github size={14} className="sm:hidden" />
                    <Github size={16} className="hidden sm:inline" />
                    <span className="hidden sm:inline">GitHub</span>
                    <span className="inline sm:hidden">Code</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
