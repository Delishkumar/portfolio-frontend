import tripadviser from './images/tripadvise.png';
import meeshoclone from './images/meesho.png';
import udamy from './images/udamy.png';
import weather from './images/weather.png';
import foodiezilla from './images/foodiezilla.png';
import { motion } from 'framer-motion';
import nostra from './images/nostra.png';
import greenden from './images/greenden.png';
import Techshop from './images/Techshop.png';
import Footer from './footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  }),
};

const ProjectSection = () => {
  return (
    <div>
      <section className="py-16 px-6 bg-black">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          👨‍💻 My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title="Techshop E-Commerce"
            image={Techshop}
            description="Modern, responsive e-commerce app with user auth and routing."
            stack="React.js, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB"
            delay={0}
            bg="from-blue-500 to-blue-300"
            liveLink="https://techshop-ecommerce-jet.vercel.app/"
            githubLink="https://github.com/Delishkumar/Techshop-frontend"
          />

          <ProjectCard
            title="FoodieZilla"
            image={foodiezilla}
            description="A stylish food delivery e-commerce site with Razorpay & Firebase auth."
            stack="React.js, Tailwind CSS, Node.js, MongoDB, Firebase, Razorpay"
            delay={0.05}
            bg="from-orange-500 to-yellow-400"
            liveLink="https://foodiezilla-frontend.vercel.app/"
            githubLink="https://github.com/Delishkumar/foodiezilla-frontend"
          />

          <ProjectCard
            title="Nostra E-Commerce"
            image={nostra}
            description="Stylish shirt store built using HTML, CSS, and JavaScript."
            stack="HTML, CSS, JavaScript"
            delay={0.1}
            bg="from-purple-500 to-purple-300"
            liveLink="https://delishkumar.github.io/Nostra-e-com/"
            githubLink="https://github.com/Delishkumar/Nostra-e-com"
          />

          <ProjectCard
            title="Weather App"
            image={weather}
            description="Live weather tracking with OpenWeather API."
            stack="React.js, Tailwind CSS, JavaScript, API"
            delay={0.2}
            bg="from-yellow-500 to-yellow-300"
            liveLink="https://weatherapp-omega-sandy.vercel.app/"
            githubLink="https://github.com/Delishkumar/weatherapp"
          />

          <ProjectCard
            title="Greenden E-Commerce"
            image={greenden}
            description="Simple plant-themed shopping page."
            stack="HTML, CSS, JavaScript"
            delay={0.3}
            bg="from-green-500 to-green-300"
            liveLink="https://delishkumar.github.io/Greenden/"
            githubLink="https://github.com/Delishkumar/Greenden"
          />

          <ProjectCard
            title="TripAdvisor Clone"
            image={tripadviser}
            description="Travel booking UI with hotel listings and reviews."
            stack="HTML, Tailwind CSS"
            delay={0.4}
            bg="from-pink-500 to-pink-300"
            liveLink="https://delishkumar.github.io/tripadviser-project/"
            githubLink="https://github.com/Delishkumar/tripadviser-project"
          />

          <ProjectCard
            title="Meesho Clone"
            image={meeshoclone}
            description="Frontend UI clone of Meesho."
            stack="HTML, CSS, JavaScript"
            delay={0.5}
            bg="from-red-500 to-red-300"
            liveLink="https://delishkumar.github.io/meeshoclone/"
            githubLink="https://github.com/Delishkumar/meeshoclone"
          />

          <ProjectCard
            title="Udemy Clone"
            image={udamy}
            description="Course platform with filtering and listings."
            stack="HTML, CSS, React.js"
            delay={0.6}
            bg="from-indigo-500 to-indigo-300"
            liveLink="https://udamy-clone-sigma.vercel.app/"
            githubLink="https://github.com/Delishkumar/udamy-react"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ProjectCard = ({ title, image, description, stack, delay, bg, liveLink, githubLink }) => (
  <motion.div
    className={`rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${bg} hover:scale-[1.03] transition-transform duration-500`}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    custom={delay}
    viewport={{ once: true }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90 text-sm mb-2">{description}</p>
      <p className="text-white/70 text-xs italic mb-4">{stack}</p>
      <div className="flex gap-3">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition"
        >
          Live Site
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black border border-black text-xs px-3 py-1 rounded-full hover:bg-gray-200 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectSection;


