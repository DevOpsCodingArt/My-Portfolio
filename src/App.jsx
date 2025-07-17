// Import React and useRef hook for referencing DOM elements
import React, { useRef } from "react";
// Import motion for animations
import { motion } from "framer-motion";
// Import all the main components of the portfolio
const Headers = React.lazy(() => import("./Components/Headers"));
const HeroSection = React.lazy(() => import("./Components/HeroSection"));
const About = React.lazy(() => import("./Components/About"));
const Skills = React.lazy(() => import("./Components/Skills"));
const Projects = React.lazy(() => import("./Components/Projects"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Footer = React.lazy(() => import("./Components/Footer"));

// Main App component
function App() {
  // Create refs for each section to enable smooth scrolling/navigation
  const homeRef = useRef(null); // Reference for Home section
  const aboutRef = useRef(null); // Reference for About section
  const skillsRef = useRef(null); // Reference for Skills section
  const projectsRef = useRef(null); // Reference for Projects section
  const contactRef = useRef(null); // Reference for Contact section

  // Object to map section names to their refs
  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  // Render the main layout with animated transitions
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animate to visible
      transition={{ duration: 0.7 }} // Animation duration
    >
      {/* Navigation header, receives sectionRefs for scroll navigation */}
      <Headers sectionRefs={sectionRefs} />
      {/* Home Section */}
      <div ref={homeRef}>
        <HeroSection />
      </div>
      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>
      {/* Skills Section */}
      <div ref={skillsRef}>
        <Skills />
      </div>
      {/* Projects Section */}
      <div ref={projectsRef} id="Projects">
        <Projects />
      </div>
      {/* Contact Section */}
      <div ref={contactRef} id="Contact">
        <Contact />
      </div>
      {/* Footer Section */}
      <Footer />
    </motion.div>
  );
}

// Export the App component as default
export default App;
