import React from 'react';
import { FaBriefcase, FaCalendar, FaUsers, FaShieldAlt, FaRocket, FaAward, FaCode, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const achievements = [
    { icon: FaUsers, text: 'Served 50+ faculty members', color: 'text-teal-500', description: 'Successfully deployed platform for university faculty communication' },
    { icon: FaShieldAlt, text: 'Zero downtime during testing', color: 'text-emerald-500', description: 'Maintained 100% uptime throughout testing phase' },
    { icon: FaRocket, text: 'Delivered 1 week early', color: 'text-cyan-500', description: 'Exceeded expectations by delivering ahead of schedule' },
  ];

  const technologies = ['JSP', 'Oracle Database', 'Java', 'HTML/CSS', 'JavaScript', 'SMS Gateway API'];

  return (
    <section id="experience" className="py-20 relative overflow-hiddengit">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold mb-4">
            💼 Work Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Professional <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world experience building enterprise solutions
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-4">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-white" size={24} />
                <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
                    The International University of Scholars
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 mt-1">
                    <FaCalendar size={14} className="text-teal-500" />
                    <span>Feb 2025 - Apr 2025 (3 months)</span>
                  </div>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm">
                    <FaAward size={12} />
                    Internship
                  </span>
                </div>
              </div>
              
              {/* Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl border border-teal-200 dark:border-teal-800 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <achievement.icon className={`${achievement.color} text-xl`} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{achievement.text}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <FaCode size={14} className="text-teal-500" />
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Responsibilities */}
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <FaDatabase size={14} className="text-teal-500" />
                  Key Responsibilities:
                </p>
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
                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
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