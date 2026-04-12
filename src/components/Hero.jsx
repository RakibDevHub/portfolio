import React from "react";
import {
  FiGithub,
  FiMail,
  FiMapPin,
  FiDownload,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold">
                👋 Open for opportunities
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm
              <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient block">
                Rakibul Islam
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-4"
            >
              Final-year CSE Student | Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 dark:text-gray-400 mb-6"
            >
              Passionate about building innovative solutions that solve
              real-world problems. Seeking internship/entry-level developer
              role.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-8"
            >
              <FiMapPin size={18} />
              <span>Dhaka, Bangladesh</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-8 py-3 border-2 border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="flex gap-4 mt-8 group"
>
  <a
    href="https://github.com/rakibdevhub"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
  >
    <FiGithub
      size={22}
      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
    />
  </a>
  <a
    href="mailto:rakibdevhub@gmail.com"
    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
  >
    <FiMail
      size={22}
      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
    />
  </a>
  <a
    href="https://wa.me/8801755063066"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
  >
    <FaWhatsapp
      size={22}
      className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
    />
  </a>
</motion.div>
          </motion.div>

          {/* Right Side - Design/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-full flex justify-center">
              <div className="w-80 h-80 relative">
                {/* Animated circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse animation-delay-2000 opacity-20"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse animation-delay-4000 opacity-20"></div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center">
                    <FiCode className="w-16 h-16 text-teal-500" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiFolder className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiUsers className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-16 w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiBriefcase className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
