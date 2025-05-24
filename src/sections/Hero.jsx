import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Sachin</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A passionate Front-End Developer building interactive and responsive websites.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
