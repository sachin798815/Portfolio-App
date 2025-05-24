import { motion } from "framer-motion";
import RestaurantImg from "../assets/restaurant.png";
import MailMateImg from "../assets/mailmate.png";
import StyleNestImg from "../assets/stylenest.png";

const projects = [
  {
    name: "Bhojanam App",
    description:
      "A modern restaurant delivery platform built with React, featuring a responsive UI and seamless user experience. Has separate Admin dashboard to add categories and recipies. Integrated Redux for state management.",
    liveLink: "https://restaurant-delivery-app-omega.vercel.app/",
    repoLink: "https://github.com/sachin798815/New-Restaurant-App",
    image: RestaurantImg,
    tech: ["React", "CSS Modules", "Redux", "React Router DOM", "Firebase SDK"],
  },
  {
    name: "MailMate",
    description:
      "A user-friendly email client application developed using React and Vite, offering efficient email management features. Integrated Context API for state management.",
    liveLink: "https://mail-mate-flame.vercel.app/",
    repoLink: "https://github.com/sachin798815/MailMate",
    image: MailMateImg,
    tech: ["React", "Vite", "Tailwind CSS", "Context API", "Firebase SDK"],
  },
  {
    name: "StyleNest",
    description:
      "An e-commerce platform for fashion products, crafted with React and Vite, providing a sleek and intuitive shopping experience. Used libraries like toastify for notifications.",
    liveLink: "https://style-nest-sepia.vercel.app/",
    repoLink: "https://github.com/sachin798815/style-nest",
    image: StyleNestImg,
    tech: ["React", "Vite", "Tailwind CSS", "Toastify", "Firebase sdk"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section className="relative z-10 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.03),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-200"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
                draggable={false}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-2 py-1 rounded select-none"
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded select-none"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-950 hover:bg-gray-900 text-white px-4 py-2 rounded select-none"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
