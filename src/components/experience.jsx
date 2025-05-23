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
    <section className="py-20 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">💼 Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-r ${exp.color} p-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="text-2xl font-semibold text-white text-center mb-2 drop-shadow-sm">{exp.role}</h3>
            <p className="text-sm text-white/90 italic mb-1 text-center">{exp.company}</p>
            <p className="text-xs text-white/80 mb-4 text-center">{exp.duration}</p>
            <p className="text-white text-sm text-center leading-relaxed tracking-wide">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
