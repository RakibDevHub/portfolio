import React from 'react';
import { FiGithub, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Rakibul Islam
            </h3>
            <p className="text-gray-400 text-sm mt-1">Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/rakibdevhub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-all hover:scale-110"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="mailto:rakibdevhub@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-all hover:scale-110"
            >
              <FiMail size={18} />
            </a>
            <a
              href="https://wa.me/8801755063066"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-all hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-teal-500 transition-all hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <FiHeart className="text-red-500 animate-pulse" size={14} /> 
              by Rakibul Islam
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;