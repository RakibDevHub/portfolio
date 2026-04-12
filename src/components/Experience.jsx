import React from 'react';
import { FaBriefcase, FaCalendar, FaUsers, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const achievements = [
    { icon: FaUsers, text: 'Served 50+ faculty members', color: 'text-teal-500' },
    { icon: FaShieldAlt, text: 'Zero downtime during testing', color: 'text-emerald-500' },
    { icon: FaRocket, text: 'Delivered 1 week early', color: 'text-cyan-500' },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl"
                >
                  <FaBriefcase className="text-white" size={28} />
                </motion.div>
              </div>
              
              <div className="flex-grow">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
                >
                  Software Engineering Intern
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                  The International University of Scholars
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mb-4">
                  <FaCalendar size={14} className="text-teal-500" />
                  <span>Feb 2025 - Apr 2025</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl border border-teal-200 dark:border-teal-800"
                    >
                      <achievement.icon className={`${achievement.color}`} size={18} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{achievement.text}</span>
                    </motion.div>
                  ))}
                </div>
                
                <ul className="space-y-3">
                  {[
                    'Co-developed a secure web-based SMS communication platform for internal faculty use, serving 50+ users',
                    'Engineered dynamic features using JSP and Oracle Database to ensure data privacy and system reliability',
                    'Integrated an offline SMS gateway to enable critical communication without internet access',
                    'Collaborated with faculty members to gather technical requirements and delivered the solution ahead of schedule'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-3 items-start group"
                    >
                      <span className="text-teal-500 mt-1 group-hover:scale-110 transition-transform">▹</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;