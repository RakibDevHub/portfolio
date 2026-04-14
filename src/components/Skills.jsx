import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['JavaScript', 'Python', 'Java', 'PHP', 'C', 'HTML5', 'CSS3'],
    description: 'Building applications across multiple paradigms'
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'JSP'],
    description: 'Creating responsive and dynamic user interfaces'
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['Oracle', 'MySQL', 'MongoDB'],
    description: 'Designing and querying relational & NoSQL databases'
  },
  {
    category: 'Tools & Technologies',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'REST APIs'],
    description: 'Industry-standard development workflows'
  },
  {
    category: 'Operating Systems',
    icon: '🖥️',
    skills: ['Windows', 'Linux'],
    description: 'Cross-platform development experience'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold mb-4">
            🚀 Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills & <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with in academic and personal projects
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>
              
              {category.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30 text-teal-700 dark:text-teal-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all border border-teal-200 dark:border-teal-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8"
        >
          * Continuously expanding my skills through hands-on projects
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;