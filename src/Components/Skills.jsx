import { motion } from "framer-motion";
import PixelCard from "./PixelCard";

function Skills() {
  const details = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Zustand",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Firestore"],
    },
    {
      category: "Tools & Other",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Webpack",
        "Vite",
        "Docker (Basic)",
        "Agile Methodologies",
      ],
    },
  ];

  return (
    <motion.section
      className="flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gradient-to-br px-4 py-8 sm:space-y-6 sm:py-12 md:space-y-8 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="uppar max-w-4xl space-y-3 text-center sm:space-y-4 md:space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          My Skills
        </h2>
        <p className="px-4 text-sm text-gray-200 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          A comprehensive overview of the technologies and tools I Learn.
        </p>
      </div>

      <div className="card grid w-full max-w-7xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6 md:gap-8 md:p-8 lg:grid-cols-3 xl:grid-cols-4">
        {details.map((detail, index) => (
          <PixelCard key={index}>
            <div className="card_item absolute inset-2 flex flex-col rounded-md p-3 text-base sm:inset-3 sm:p-4 md:inset-4 md:p-6">
              <h3 className="mb-2 text-lg font-bold text-[#67e8f9] drop-shadow-lg sm:mb-3 sm:text-xl md:mb-4 md:text-2xl">
                {detail.category}
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-white sm:space-y-1.5 sm:pl-5 md:space-y-2 md:pl-6">
                {detail.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-xs font-medium sm:text-sm md:text-base"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </PixelCard>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
