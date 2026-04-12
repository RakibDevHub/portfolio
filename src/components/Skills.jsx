import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['C', 'Python', 'Java', 'PHP', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'JSP']
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['Oracle', 'MySQL', 'MongoDB']
  },
  {
    category: 'Tools & Technologies',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'REST APIs', 'Linux']
  },
  {
    category: 'Familiar With',
    icon: '📚',
    skills: ['Data Structures', 'Algorithms', 'Basic Machine Learning']
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer border border-teal-200 dark:border-teal-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;