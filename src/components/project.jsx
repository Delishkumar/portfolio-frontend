import tripadviser from './images/tripadvise.png'
import meeshoclone from './images/meesho.png'
import udamy from './images/udamy.png'
import weather from './images/weather.png'
import { motion } from "framer-motion";
import nostra from './images/nostra.png'
import greenden from './images/greenden.png'
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };
  
  const ProjectSection = () => {
    return (
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-400 to-cyan-200">
        <motion.h2
          className="text-3xl font-bold text-center text-red-600 mb-12"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          👨🏻‍💻 My Projects
        </motion.h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
            title="Nostra E-Commerce"
            image={nostra}
            description="Nostra is a stylish e-commerce shirt website built using HTML, CSS, and JavaScript with a clean and responsive design."
            stack="HTML,CSS,Javascript"
            delay={0}
            bg="from-blue-400 to-blue-200"
            liveLink="https://delishkumar.github.io/Nostra-e-com/"
            githubLink="https://github.com/Delishkumar/Nostra-e-com"
          />
  

        <ProjectCard
      
            title="Weather App"
            image={weather}
            description="Live weather app using OpenWeather API with city search."
            stack="React.js, tailwindCSS, JavaScript, OpenWeather API"
            delay={0.1}
            bg="from-yellow-400 to-yellow-200"
            liveLink="https://weatherapp-omega-sandy.vercel.app/"
            githubLink="https://github.com/Delishkumar/weatherapp"
          />
           <ProjectCard
            title="Greenden E-Commerce"
            image={greenden}
            description="GreenDen is a simple plant-themed e-commerce page built with HTML, CSS, and JavaScript. 🌿"
            stack="HTML,CSS,Javascript"
            delay={0.2}
            bg="from-red-400 to-red-200"
            liveLink="https://delishkumar.github.io/Greenden/"
            githubLink="https://github.com/Delishkumar/Greenden"
          />
          <ProjectCard
            title="TripAdvisor Clone"
            image={tripadviser}
            description="A travel booking UI with search, hotel listings, reviews, and ratings."
            stack="HTML,TailwindCSS,JAVASCRIPT"
            delay={0.3}
            bg="from-green-400 to-green-200"
            liveLink="https://delishkumar.github.io/tripadviser-project/"
            githubLink="https://github.com/Delishkumar/tripadviser-project"
          />
  
          <ProjectCard
            title="Meesho Clone"
            image={meeshoclone}
            description="A frontend UI clone of Meesho with product cards and categories."
            stack="HTML, CSS, JavaScript"
            delay={0.4}
            bg="from-pink-400 to-pink-200"
            liveLink=" https://delishkumar.github.io/meeshoclone/"
            githubLink="https://github.com/Delishkumar/meeshoclone"
          />
  
          <ProjectCard
            title="udamy-clone"
            image={udamy}
            description="A full-stack learning platform with course listing and filtering."
            stack="HTML,CSS,React.js"
            delay={0.5}
            bg="from-purple-400 to-purple-200"
            liveLink="https://udamy-clone-sigma.vercel.app/"
            githubLink="https://github.com/Delishkumar/udamy-react"
          />
  
       
        </div>
      </section>
    );
  };
  
  const ProjectCard = ({ title, image, description, stack, delay, bg, liveLink, githubLink }) => (
    <motion.div
      className={`rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br ${bg} hover:scale-105 transition-all duration-500`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true }}
    ><div className='hover:translate-y-3'>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-orange-700 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-xs text-gray-600 italic mb-3">{stack}</p>
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
            className="bg-white text-black border border-black text-xs px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
  
  export default ProjectSection;