import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./footer";

 function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      
      await axios.post("https://portfolio-be-kmx2.onrender.com/api/user", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div>
    <div className="bg-gradient-to-r from-amber-400 to-white  p-14">
    <div className="max-w-md mx-auto mt-10 p-6 bg-transparent shadow-2xl rounded-2xl">
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-4 text-center"
      >
        Contact Us
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full border p-2 rounded"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-600"
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>

      <AnimatePresence>
        {success && (
          <motion.div
            className="mt-4 text-green-600 font-medium text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            ✅ Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
      </div>
     

    </div>
    <Footer/>
    </div>
  );
}
export default Contact