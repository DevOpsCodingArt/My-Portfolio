import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex min-h-screen w-full flex-col items-center justify-center bg-[#111827] px-4 py-8 text-white/60 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="uppar_part mb-8 space-y-3 text-center md:mb-12 lg:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          About Me
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl">
          Discover my journey, passion, and what drives my development work.
        </p>
      </div>

      <div className="lower_part flex w-full max-w-6xl flex-col items-center justify-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
        <div className="image h-60 w-full overflow-hidden rounded-2xl sm:h-72 sm:w-80 md:h-80 md:w-96 lg:h-96 lg:w-[30%]">
          <img
            src="/About.jpg"
            className="h-full w-full object-cover object-top"
            alt="About Me"
          />
        </div>

        <div className="content flex w-full flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:w-7/12 lg:space-y-8">
          <p className="text-sm leading-relaxed sm:text-base md:text-lg">
            Hello! I'm Moiz Ahmad, a dedicated MERN stack developer with a
            profound passion for building intuitive, high-performance, and
            visually appealing web applications. My journey into web development
            began with a deep fascination for how technology can elegantly solve
            complex real-world problems and create seamless, engaging user
            experiences.
          </p>

          <p className="text-sm leading-relaxed sm:text-base md:text-lg">
            I specialize in crafting robust and scalable backend APIs with{" "}
            <b className="text-white">Node.js</b> and{" "}
            <b className="text-white">Express.js</b>, ensuring efficient data
            management with <b className="text-white">MongoDB</b>, and bringing
            designs to life with dynamic and responsive{" "}
            <b className="text-white">React.js</b> interfaces. I thrive on
            challenges and am constantly exploring new technologies and refining
            my craft to deliver exceptional digital solutions.
          </p>

          <p className="text-sm leading-relaxed sm:text-base md:text-lg">
            Beyond the lines of code, I enjoy delving into the latest tech
            trends, contributing to open-source initiatives, and maintaining an
            active lifestyle. I believe in continuous learning and collaborative
            innovation. I'm excited to connect and explore how we can build
            something truly remarkable together!
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
