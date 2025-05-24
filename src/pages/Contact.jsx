import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black text-white px-4 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* subtle radial gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)]" />

      <motion.div
        ref={ref}
        className="max-w-3xl w-full relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

        <div className="bg-gray-800 rounded-xl p-8 shadow-lg space-y-6 text-left md:text-center">
          <p className="text-lg">
            <strong>Phone:</strong> <a href="tel:+918571844548" className="text-blue-400 hover:underline">+91 8571844548</a>
          </p>

          <p className="text-lg">
            <strong>Email:</strong> <a href="mailto:sachin798815@gmail.com" className="text-blue-400 hover:underline">sachin798815@gmail.com</a>
          </p>

          <p className="text-lg max-w-xl mx-auto">
            <strong>Address:</strong> Hno. 3, Ekta Vihar Colony, Hisar, Haryana, India
          </p>

          <div className="flex justify-center space-x-8 mt-6">
            <a
              href="https://linkedin.com/in/sachin-kumar-b8716a270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition text-3xl"
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.27h-3v-5.5c0-1.32-1.18-1.5-1.5-1.5-.41 0-1.5.29-1.5 1.5v5.5h-3v-11h3v1.5c.44-.65 1.7-1.5 3-1.5 2.5 0 3.5 1.66 3.5 4.14v6.86z" />
              </svg>
            </a>

            <a
              href="https://github.com/sachin798815"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-3xl"
              aria-label="GitHub"
            >
              {/* GitHub icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M12 .5c-6.62 0-12 5.38-12 12 0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.235 1.838 1.235 1.07 1.83 2.807 1.3 3.495.994.107-.775.418-1.3.76-1.6-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.123-.3-.535-1.5.115-3.13 0 0 1.005-.32 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.04.14 3 .405 2.28-1.55 3.285-1.23 3.285-1.23.65 1.63.238 2.83.115 3.13.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.435.38.825 1.11.825 2.24v3.32c0 .32.21.69.825.57C20.565 22.3 24 17.8 24 12.5 24 5.88 18.62.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
