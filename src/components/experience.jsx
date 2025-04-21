import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Lucas TVS",
    role: "Team Leader & NEEM Trainee",
    duration: "2017 - 2024",
    description:
      "Worked in starter motor production. Led a team, maintained quality control, and ensured on-time delivery.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    company: "Full Stack Developer (Freelance)",
    role: "MERN Stack Developer",
    duration: "2025 - Present",
    description:
      "Developed full-stack applications using React, Node.js, Express, and MongoDB. Built clones like Udemy, Meesho, TripAdvisor.",
    color: "from-green-400 to-blue-500",
  },
];

const Experience = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-5 text-blue-600">💼 Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${exp.color} p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300`}
          >
            <h3 className="text-2xl font-semibold text-center">{exp.role}</h3>
            <p className="text-sm text-white/80 italic mb-1 text-center">{exp.company}</p>
            <p className="text-sm text-white/70 mb-1 text-center">{exp.duration}</p>
            <p className="text-white text-center">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;