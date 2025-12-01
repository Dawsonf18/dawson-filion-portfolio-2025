import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import GalaxyBackground from '../components/Particles/GalaxyBackground';
import { updatePageTitle } from '../utils/updateTitle';
import './Home.css';

const Home = () => {
  useEffect(() => {
    updatePageTitle('Home');
  }, []);

  return (
    <div className="home">
      <GalaxyBackground />
      <div className="home-content">
        <motion.div
          className="hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm
          </motion.h1>

          <motion.h2
            className="hero-name"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="gradient-text">Dawson Filion</span>
          </motion.h2>

          <div className="hero-role">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'Aspiring AI Engineer',
                2000,
                'C# & .NET Specialist',
                2000,
                'React Developer',
                2000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Full-Stack Developer with 3 years of experience in C#, .NET, and React,
            transitioning into AI Engineering. Combining enterprise development expertise
            with AI integration skills to build intelligent, production-ready applications.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="/projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#" className="btn btn-outline">
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/Dawsonf18"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dawson-filion-317932227/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="ai-visual">
            <div className="ai-circle circle-1"></div>
            <div className="ai-circle circle-2"></div>
            <div className="ai-circle circle-3"></div>
            <div className="ai-core"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </div>
  );
};

export default Home;
