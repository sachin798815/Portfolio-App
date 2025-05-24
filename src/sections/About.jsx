import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MyImg from "../assets/me.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black text-white px-4 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* subtle radial gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)]" />

      <motion.div
        ref={ref}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Image container */}
        <div className="h-64 md:h-full w-full bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center select-none">
          <img
            src={MyImg}
            alt="My image"
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-4">
            I'm a front-end developer focused on building beautiful and responsive websites using modern technologies like HTML, CSS, JavaScript, React and more. I'm passionate about learning and improving continuously.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <li>✔ HTML5</li>
              <li>✔ CSS3</li>
              <li>✔ Bootstrap</li>
              <li>✔ JavaScript (ES6+)</li>
              <li>✔ React.js</li>
              <li>✔ React Bootstrap</li>
              <li>✔ Tailwind CSS</li>
              <li>✔ Git & GitHub</li>
              <li>✔ Next.js</li>
              <li>✔ Firebase SDK</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Education:</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <strong>Guru Jambheshwar University of Science and Technology</strong>, Hisar, Haryana  
                <br />
                B.Tech in Information Technology
              </li>
              <li>
                <strong>New Yashoda Public School</strong>, Hisar, Haryana  
                <br />
                Schooling
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
