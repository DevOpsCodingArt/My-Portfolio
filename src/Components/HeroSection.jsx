import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Download } from "lucide-react";

function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="flex min-h-[100svh] w-full flex-col items-center justify-center space-y-4 overflow-x-hidden bg-gradient-to-br from-blue-800 to-purple-900 px-4 py-8 text-center text-white sm:space-y-6 sm:py-12 md:space-y-8 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="dp xs:h-32 xs:w-32 relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-cyan-400 sm:h-40 sm:w-40 sm:ring-4 md:h-48 md:w-48 md:ring-6 lg:h-56 lg:w-56 lg:ring-8 xl:h-60 xl:w-60">
        <img
          src="/HeroSection.jpg"
          alt="person"
          className="h-full w-full object-cover transition-all duration-500 hover:scale-110 hover:rotate-3"
        />
      </div>

      <h1 className="xs:text-2xl max-w-4xl text-xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Moiz Ahmad
        </span>
      </h1>

      <p className="xs:text-sm max-w-2xl px-2 text-xs text-gray-200 sm:px-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Crafting Digital Experiences with the MERN Stack
      </p>

      <div className="btn flex w-full max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-6">
        <Button
          className="!w-full !transform !rounded-full !px-4 !py-3 !text-sm !font-semibold !shadow-lg !transition-all !duration-300 hover:!scale-105 hover:!shadow-xl sm:!w-auto sm:!px-6 sm:!py-3 sm:!text-base md:!px-8 md:!py-4 md:!text-lg"
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #67e8f9 30%, #3b82f6 90%)",
            "&:hover": {
              background: "linear-gradient(45deg, #22d3ee 30%, #2563eb 90%)",
            },
          }}
          onClick={() => scrollToSection("Projects")}
        >
          View My Work
        </Button>

        <a
          href="/cv.pdf"
          download
          className="focus:ring-opacity-50 flex w-full transform items-center justify-center space-x-2 rounded-full border-2 border-white px-4 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-white focus:outline-none sm:w-auto sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
        >
          <Download size={16} className="sm:hidden" />
          <Download size={20} className="hidden sm:inline" />
          <span>Download CV</span>
        </a>
      </div>
    </motion.section>
  );
}

export default HeroSection;
