import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-4 py-20 flex items-center justify-center"
    >
      <motion.div
        className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Optional image or placeholder */}
        <div className="h-64 md:h-full w-full bg-gray-800 rounded-xl flex items-center justify-center text-gray-400">
          {/* You can replace this div with <img src="..." /> */}
          [ Your Image Here ]
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            I'm a front-end developer focused on building beautiful and responsive websites using modern technologies like React, Tailwind CSS, and more. I'm passionate about learning and improving continuously.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <li>✔ React</li>
              <li>✔ JavaScript (ES6+)</li>
              <li>✔ HTML5 & CSS3</li>
              <li>✔ Tailwind CSS</li>
              <li>✔ Git & GitHub</li>
              <li>✔ Framer Motion</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
