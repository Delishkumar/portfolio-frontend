
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
  },
  {
    name: "MERN Stack Development",
    institute: "EMC",
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen m-5">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Education Section */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">🎓 Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -250 }} // start hidden and off-screen left
              whileInView={{ opacity: 1, x: 0 }} // animate into view
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }} 
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-xl shadow-md ${edu.bgColor} transition-all duration-300 hover:shadow-2xl`}
            >
              <h3 className="text-xl font-semibold text-black text-center">{edu.title}</h3>
              <p className="text-gray-700 text-center">{edu.institution}</p>
              <p className="text-gray-600 text-sm text-center">{edu.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Section */}
        <h3 className="text-3xl font-bold text-center text-blue-600 mt-16 mb-8">🏅 Certificates</h3>
        <div className="space-y-6">
          {certificateData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 250 }} // start hidden and off-screen left
              whileInView={{ opacity: 1, x: 0 }} // animate into view
              transition={{ duration: 0.9, ease: "easeIn" }}
              viewport={{ once: true, amount: 0.3 }} 
              
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-amber-400 to-red-500 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl text-center"
            >
              <p className="text-lg font-medium text-black text-center">{cert.name}</p>
              <p className="text-sm text-gray-600 text-center">{cert.institute}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
