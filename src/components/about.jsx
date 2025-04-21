
import { motion } from "framer-motion";
import Education from "./education";
import Experience from "./experience";
export default function About() {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto px-4 py-10"
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-lime-500">About Me</h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-lg leading-8 text-gray-700 text-center"
      >
        Hello! I’m a passionate <span className="font-semibold text-blue-600 animate-blink">Full Stack Developer</span> specializing in the 
        <span className="font-semibold text-green-600 animate-pulse"> MERN Stack</span> (MongoDB, Express.js, React.js, Node.js). I love building fast, responsive, and user-friendly web applications that solve real-world problems.
        <br /><br />
        With a strong foundation in <span className="font-medium text-purple-600">JavaScript ES6+</span> and modern frontend libraries like <span className="font-medium text-pink-600">React</span>, I craft smooth and interactive UIs using <span className="font-medium text-cyan-600">Tailwind CSS</span> and enhance UX with <span className="font-medium text-yellow-500">Framer Motion</span> animations.
        <br /><br />
        On the backend, I create scalable REST APIs with <span className="font-medium text-red-500">Node.js</span> and <span className="font-medium text-green-700">Express</span>, securely integrating databases like <span className="font-medium text-emerald-600">MongoDB</span> (with Mongoose). I also have experience with <span className="italic">authentication (JWT)</span>, <span className="italic">file uploads</span>, and <span className="italic">cloud deployment</span>.
        <br /><br />
      
      </motion.p>
    </motion.div>
<Education/>
<Experience/>
</div>
  );
}