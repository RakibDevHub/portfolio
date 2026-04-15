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
  // Fallback image in case rakib.jpeg doesn't load
  const getImageUrl = (e) => {
    e.target.src = `https://ui-avatars.com/api/?name=Rakibul+Islam&background=14b8a6&color=fff&rounded=true&size=400&bold=true&length=2`;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-16 lg:py-0"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
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
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4"
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
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Hire Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-6 sm:px-8 py-3 border-2 border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <a
                href="https://github.com/rakibdevhub"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-900/30"
              >
                <FiGithub
                  size={22}
                  className="transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:scale-125"
                />
              </a>

              <a
                href="mailto:rakibdevhub@gmail.com"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-900/30"
              >
                <FiMail
                  size={22}
                  className="transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:scale-125"
                />
              </a>

              <a
                href="https://wa.me/8801755063066"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-900/30"
              >
                <FaWhatsapp
                  size={22}
                  className="transition-all duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:scale-125"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-full flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative mx-auto">
                {/* Animated circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse animation-delay-2000 opacity-20"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse animation-delay-4000 opacity-20"></div>

                {/* Center image with fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 border-teal-500/20">
                    <img
                      src="/images/rakib.jpeg"
                      alt="Rakibul Islam - Full Stack Developer"
                      className="w-full h-full object-cover object-center"
                      onError={getImageUrl}
                    />
                  </div>
                </div>

                {/* Floating elements - Hidden on very small screens */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiFolder className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiUsers className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-10 sm:-right-16 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FiBriefcase className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
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
