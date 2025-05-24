import { motion } from "framer-motion";
import RestaurantImg from "../assets/restaurant.png";
import MailMateImg from "../assets/mailmate.png";
import StyleNestImg from "../assets/stylenest.png";

const projects = [
  {
    name: "New Restaurant App",
    description:
      "A modern restaurant delivery platform built with React, featuring a responsive UI and seamless user experience.",
    liveLink: "https://restaurant-delivery-app-omega.vercel.app/",
    repoLink: "https://github.com/sachin798815/New-Restaurant-App",
    image: RestaurantImg,
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "MailMate",
    description:
      "A user-friendly email client application developed using React and Vite, offering efficient email management features.",
    liveLink: "https://mail-mate-flame.vercel.app/",
    repoLink: "https://github.com/sachin798815/MailMate",
    image: MailMateImg,
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    name: "StyleNest",
    description:
      "An e-commerce platform for fashion products, crafted with React and Vite, providing a sleek and intuitive shopping experience.",
    liveLink: "https://style-nest-sepia.vercel.app/",
    repoLink: "https://github.com/sachin798815/style-nest",
    image: StyleNestImg,
    tech: ["React", "Vite", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center mt-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
