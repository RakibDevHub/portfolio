import React, { useState, useEffect } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiBriefcase,
  FiLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projectsData } from "../data/projectsData";

// Helper function to generate a colored SVG placeholder
const generatePlaceholder = (title) => {
  const colors = [
    "14b8a6",
    "10b981",
    "06b6d4",
    "0d9488",
    "059669",
    "0891b2",
    "0f766e",
    "0d6e6e",
  ];
  const colorIndex = title.length % colors.length;
  const color = colors[colorIndex];

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='system-ui, sans-serif' font-weight='bold'%3E${encodeURIComponent(title.split(" ")[0])}%3C/text%3E%3C/svg%3E`;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [mainProject, setMainProject] = useState(null);
  const [internshipProject, setInternshipProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
    const main = projectsData.find((p) => p.category === "main");
    const internship = projectsData.find((p) => p.category === "internship");
    const others = projectsData.filter(
      (p) => p.category !== "main" && p.category !== "internship",
    );

    setMainProject(main);
    setInternshipProject(internship);
    setOtherProjects(others);
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack apps • Mobile games • Database tools • Real-world solutions
          </p>
        </motion.div>

        {/* Main Project & Internship Project - Featured Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainProject && <ProjectCard project={mainProject} variant="main" />}
          {internshipProject && (
            <ProjectCard project={internshipProject} variant="internship" />
          )}
        </div>

        {/* Other Projects - Slider Section */}
        {otherProjects.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  More Projects
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {otherProjects.length} additional {otherProjects.length === 1 ? 'project' : 'projects'}
                </p>
              </div>
              <div className="flex gap-2">
                <div className="swiper-button-prev-custom w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors">
                  <FiChevronLeft size={20} />
                </div>
                <div className="swiper-button-next-custom w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors">
                  <FiChevronRight size={20} />
                </div>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="project-swiper pb-12"
            >
              {otherProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <SliderProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/RakibDevHub"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FiGithub size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">View All Projects on GitHub</span>
            <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Project Card (Main & Internship)
const ProjectCard = ({ project, variant }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const getImageSrc = () => {
    if (imgError || !project.image) {
      return generatePlaceholder(project.title);
    }
    return project.image;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-500">
        <img
          src={getImageSrc()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          onError={() => !imgError && setImgError(true)}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-r from-teal-900/90 to-emerald-900/90 flex items-center justify-center gap-4 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all hover:scale-110"
          >
            <FiGithub size={22} className="text-white" />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all hover:scale-110"
            >
              <FiExternalLink size={22} className="text-white" />
            </a>
          )}
        </div>

        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
              variant === "main"
                ? "bg-yellow-500 text-black"
                : "bg-purple-500 text-white"
            }`}
          >
            {variant === "internship" && <FiBriefcase size={12} />}
            {project.badge}
          </span>
        </div>

        {project.status && (
          <div className="absolute top-3 right-3">
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                project.status === "In Development"
                  ? "bg-orange-500 text-white"
                  : "bg-emerald-500 text-white"
              }`}
            >
              {project.status}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-xs rounded">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Slider Project Card (Smaller version for carousel)
const SliderProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const getImageSrc = () => {
    if (imgError || !project.image) {
      return generatePlaceholder(project.title);
    }
    return project.image;
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-500">
        <img
          src={getImageSrc()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          onError={() => !imgError && setImgError(true)}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-r from-teal-900/90 to-emerald-900/90 flex items-center justify-center gap-3 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all hover:scale-110"
          >
            <FiGithub size={18} className="text-white" />
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-all hover:scale-110"
            >
              <FiExternalLink size={18} className="text-white" />
            </a>
          )}
        </div>

        {project.status && (
          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-0.5 text-xs rounded-full ${
                project.status === "In Development"
                  ? "bg-orange-500 text-white"
                  : "bg-emerald-500 text-white"
              }`}
            >
              {project.status}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold mb-1 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;