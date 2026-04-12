import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rakibdevhub@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently looking for internship or entry-level junior developer roles. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <FiMail className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <a href="mailto:rakibdevhub@gmail.com" className="hover:text-teal-600">
                    rakibdevhub@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <FiPhone className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <a href="tel:01755063066" className="hover:text-teal-600">
                    01755063066
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <FiMapPin className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p>Badda, Dhaka - 1212, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                  <FiGithub className="text-teal-600 dark:text-teal-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                  <a href="https://github.com/rakibdevhub" target="_blank" className="hover:text-teal-600">
                    github.com/rakibdevhub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col justify-center"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            </div>
            
            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
              <FiSend size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;