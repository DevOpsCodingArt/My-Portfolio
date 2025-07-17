import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Folder, Home, Mail, User } from "lucide-react";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Headers({ sectionRefs }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const nav = [
    { label: "Home", icon: <Home size={20} /> },
    { label: "About", icon: <User size={20} /> },
    { label: "Skills", icon: <Code size={20} /> },
    { label: "Projects", icon: <Folder size={20} /> },
    { label: "Contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position

      nav.forEach((item, index) => {
        const ref = sectionRefs[item.label]; // Get ref for section
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect(); // Get position
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveIdx(index); // Set active index if section is in view
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (idx, label) => {
    setActiveIdx(idx); // Set active index
    const ref = sectionRefs && sectionRefs[label]; // Get ref for section
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
    }
  };

  // Render the navigation header with animation
  return (
    <motion.header
      className={`${scrollY === 0 ? "bg-black/80" : "mt-1 rounded-full bg-[#1f2937]/80"} fixed z-50 flex w-full items-center justify-between p-4 text-xl text-white transition-all duration-300 ease-in-out lg:p-8`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Logo/Name section */}
      <div className="logoName w-1/2 text-left text-2xl font-bold uppercase lg:w-1/4 lg:text-center lg:text-3xl">
        Moiz Ahmad
      </div>
      {/* Hamburger menu for lg and below */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </div>
      {/* Navigation buttons */}
      <div
        className={`nav ${mobileOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-[#1f2937]/95 lg:static lg:block lg:w-auto lg:bg-transparent`}
      >
        <nav>
          <ul className="flex flex-col gap-1 p-4 lg:flex-row lg:gap-2 lg:p-0">
            {nav.map((item, idx) => (
              <Button
                key={item.label}
                onClick={() => {
                  handleNavClick(idx, item.label);
                  setMobileOpen(false);
                }}
                className={`flex cursor-pointer items-center gap-2 !rounded-full !font-semibold ${activeIdx === idx ? "bg-gradient-to-r from-blue-400 to-blue-600" : ""} w-full !px-8 !text-white !capitalize lg:w-auto`}
              >
                <li className="flex w-full items-center gap-2 lg:w-auto">
                  {item.icon} {item.label}
                </li>
              </Button>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

// Export Headers component
export default Headers;
