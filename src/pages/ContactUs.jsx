import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    progress: 0,
  });

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const loadingBarVariants = {
    initial: { width: "0%" },
    loading: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    loading: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonTextVariants = {
    initial: { y: 0 },
    loading: {
      y: [0, -20, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      backgroundColor: "#9333ea",
      boxShadow: "0 0 0 rgba(147, 51, 234, 0)",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#7e22ce",
      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      backgroundColor: "#6b21a8",
      transition: {
        duration: 0.1,
      },
    },
    loading: {
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.2)",
        "0 0 40px rgba(147, 51, 234, 0.6)",
        "0 0 20px rgba(147, 51, 234, 0.2)",
      ],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null, progress: 0 });

    // Simulate progress
    const progressInterval = setInterval(() => {
      setStatus((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 2, 90),
      }));
    }, 50);

    try {
      const templateParams = {
        to_email: "weroshprofy@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_d6tro1e",
        "template_2o9roif",
        templateParams,
        "EzReJSUxpdt8P7ZqI"
      );

      clearInterval(progressInterval);
      setStatus((prev) => ({ ...prev, progress: 100 }));

      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          progress: 0,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 500);

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      clearInterval(progressInterval);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
        progress: 0,
      });
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full py-16 flex flex-col justify-center items-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="w-full max-w-xl px-8 py-12 relative"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Contact Us
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-center mb-8"
        >
          We would love to hear from you. Please fill out the form below to get
          in touch with us.
        </motion.p>

        <motion.form
          variants={itemVariants}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </motion.div>

          <motion.div className="relative">
            <motion.button
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={status.submitting ? "loading" : "initial"}
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              disabled={status.submitting}
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate={status.submitting ? "loading" : "initial"}
                className="absolute inset-0 bg-purple-500/20"
              />

              {status.submitting && (
                <motion.div
                  variants={loadingBarVariants}
                  initial="initial"
                  animate="loading"
                  className="absolute left-0 bottom-0 h-1 bg-purple-400"
                  style={{ width: `${status.progress}%` }}
                />
              )}

              <motion.span
                variants={buttonTextVariants}
                initial="initial"
                animate={status.submitting ? "loading" : "initial"}
                className="relative z-10 block"
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </motion.span>
            </motion.button>
          </motion.div>

          {status.submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 text-center mt-4"
            >
              Message sent successfully!
            </motion.p>
          )}

          {status.error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center mt-4"
            >
              {status.error}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactUs;
