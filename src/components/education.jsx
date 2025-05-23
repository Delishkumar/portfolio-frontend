import { motion } from 'framer-motion';

const educationData = [
  {
    title: "B.A - Sociology",
    institution: "Tamil Nadu Open University",
    year: "2021 - 2024",
    bgColor: "bg-pink-600",
  },
  {
    title: "Diploma - EEE",
    institution: "GVT College, Madurai",
    year: "2016 - 2018",
    bgColor: "bg-green-500",
  },
  {
    title: "12th - Computer Science",
    institution: "Ilayangudi HRSEC School",
    year: "2015 - 2016",
    bgColor: "bg-purple-500",
  },
];

const certificateData = [
  {
    name: "Diploma in Computer Application (DCA)",
    institute: "CSC",
    year: "July 2019 - January 2020",
    bgColor: "from-rose-400 to-red-500",
  },
  {
    name: "MERN Stack Development",
    institute: "EMC",
    year: "January 2025 - April 2025",
    bgColor: "from-sky-400 to-blue-600",
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-12 px-4 sm:px-8 lg:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 py-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-8 text-gray-700 text-center"
        >
          Here's a summary of my academic background and technical certifications.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        {/* Education Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-14 animate-pulse">🎓 Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className={`p-6 rounded-2xl shadow-lg text-white ${edu.bgColor} transform transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold text-center mb-2">{edu.title}</h3>
              <p className="text-md text-center italic">{edu.institution}</p>
              <p className="text-sm text-center mt-1">{edu.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Section */}
        <h3 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mt-20 mb-10 animate-bounce">🏅 Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificateData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.08 }}
              className={`bg-gradient-to-br ${cert.bgColor} p-5 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl text-center text-white`}
            >
              <p className="text-lg font-semibold mb-1">{cert.name}</p>
              <p className="text-sm italic">{cert.institute}</p>
              <p className="text-xs mt-1">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
