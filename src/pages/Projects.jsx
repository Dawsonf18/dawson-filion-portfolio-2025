import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';
import GalaxyBackground from '../components/Particles/GalaxyBackground';
import { updatePageTitle } from '../utils/updateTitle';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    updatePageTitle('Projects');
  }, []);
  const projects = [
    {
      title: 'AI-Powered Intelligent System (Example Project)',
      description: 'Full-stack AI application that integrates advanced language models with custom business logic. Built with Python backend, React frontend, and deployed on Azure. Features real-time AI-powered insights, intelligent automation, and seamless user experience. (This is a placeholder - update with your actual AI project)',
      tags: ['Python', 'React', 'Azure', 'OpenAI API', 'C#/.NET'],
      icon: <FaBrain />,
      github: 'https://github.com/Dawsonf18',
      demo: '#',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="projects">
      <GalaxyBackground />
      <div className="projects-container">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h1>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Building intelligent applications that leverage AI to solve real-world problems
        </motion.p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon">{project.icon}</div>

              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="more-projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>More projects available on my GitHub</p>
          <a
            href="https://github.com/Dawsonf18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> View All Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
