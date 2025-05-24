import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Refs for in-view detection
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Detect when each card enters the viewport
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white px-6 py-20 flex flex-col items-center">
      {/* Hero Intro */}
      <motion.div
        className="max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-400">Sachin</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Passionate Front-End Developer building interactive, responsive websites and web apps.
        </p>
      </motion.div>

      {/* Info Cards Container */}
      <motion.div
        className="flex flex-col md:flex-row gap-12 max-w-5xl w-full"
        initial={false} // Prevent remount animation resets
      >
        {/* About Me Card */}
        <motion.div
          ref={aboutRef}
          className="flex-1 bg-gray-800/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => navigate("/about")}
          role="button"
          tabIndex={0}
          initial={{ opacity: 0, y: 40 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') navigate("/about"); }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I specialize in React, Vite, and Tailwind CSS, crafting smooth user experiences.
            I love turning ideas into clean, efficient code and bringing designs to life.
          </p>
          <div className="text-center">
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              See Skills
            </button>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          ref={projectsRef}
          className="flex-1 bg-gray-800/70 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => navigate("/projects")}
          role="button"
          tabIndex={0}
          initial={{ opacity: 0, y: 40 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') navigate("/projects"); }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            From restaurant delivery apps to email clients and fashion e-commerce sites,
            my projects showcase responsive design, clean code, and modern frontend technologies.
          </p>
          <p className="text-gray-400 text-sm italic mb-6 text-center">
            (React, Redux, Context API, Firebase, Tailwind CSS, and more)
          </p>
          <div className="text-center">
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
              See Projects
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
