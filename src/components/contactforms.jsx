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
      
       axios.post("https://portfolio-be-kmx2.onrender.com/api/user", formData);
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
    <div >
      { !success ?(
            <div className="  p-14" style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1470&q=80')",
            }}>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl">
      
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
      </form>   </div>
     

     </div>
    
   
          ):(
            
    <div className="max-w-60 h-screen mx-auto mt-10 p-6">
          <AnimatePresence>
             <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg max-w-sm w-full text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="text-green-600 text-6xl"
            >
              ✅
            </motion.div>
            <h2 className="text-2xl font-bold text-green-700">
              Message send Successful
            </h2>
            <p className="text-gray-700 text-sm">
             will be in touch with you soon 💬...
            </p>
          </motion.div>
          </AnimatePresence>
          </div>)}
    

    <Footer/>
      </div>
       
  );
}
export default Contact