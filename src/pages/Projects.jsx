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
      title: 'Policy Chatbot',
      description: 'A full-stack RAG (Retrieval-Augmented Generation) chatbot that helps users navigate company policy documents using natural language. Built with Azure OpenAI for embeddings and chat, Azure AI Search for vector retrieval, FastAPI backend, and React frontend. Features document ingestion pipeline, semantic search with cited sources, and real-time chat interface.',
      tags: ['Python', 'React', 'FastAPI', 'Azure OpenAI', 'Azure AI Search', 'RAG', 'LangChain'],
      icon: <FaRobot />,
      github: 'https://github.com/Dawsonf18/policy-ai-chatbot',
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
                  <FaGithub /> View Code
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
