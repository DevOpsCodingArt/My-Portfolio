import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full border-t border-gray-800/50 bg-[#0a0f1c] py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="space-y-4 text-center">
          <p className="text-base font-medium text-gray-300 sm:text-lg">
            &copy; {currentYear}{" "}
            <span className="text-[#67e8f9]">Moiz Ahmad</span>. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-400 sm:text-sm md:text-base">
            <span>Designed and Developed with</span>
            <Heart
              size={16}
              className="animate-pulse fill-current text-red-500"
            />
            <span>using</span>
            <span className="cursor-default font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300">
              React
            </span>
            <span className="text-gray-400">,</span>
            <span className="cursor-default font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
              Tailwind CSS
            </span>
            <span className="text-gray-400">, and the</span>
            <span className="cursor-default font-semibold text-green-400 transition-colors duration-300 hover:text-green-300">
              MERN
            </span>
            <span>Stack.</span>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </motion.footer>
  );
}

export default Footer;
