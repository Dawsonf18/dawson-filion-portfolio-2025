import { motion } from 'framer-motion';
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCloud,
  FaCode
} from 'react-icons/fa';
import {
  SiMongodb,
  SiPostgresql,
  SiPandas,
  SiJavascript,
  SiDotnet,
  SiOpenai
} from 'react-icons/si';
import GalaxyBackground from '../components/Particles/GalaxyBackground';
import './About.css';

const About = () => {
  const skills = [
    { name: 'C#', icon: <FaCode />, category: 'Backend' },
    { name: '.NET', icon: <SiDotnet />, category: 'Backend' },
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
    { name: 'Python', icon: <FaPython />, category: 'AI' },
    { name: 'OpenAI API', icon: <SiOpenai />, category: 'AI' },
    { name: 'Pandas', icon: <SiPandas />, category: 'Data' },
    { name: 'SQL Server', icon: <FaDatabase />, category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'Database' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
    { name: 'Azure Cloud', icon: <FaCloud />, category: 'Cloud' },
    { name: 'Docker', icon: <FaDocker />, category: 'DevOps' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
    { name: 'Git', icon: <FaGitAlt />, category: 'Tools' },
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
    <div className="about">
      <GalaxyBackground />
      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h1>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="card">
              <h2>Who I Am</h2>
              <p>
                I'm a <span className="highlight">Full-Stack Developer</span> with <span className="highlight">3 years of professional experience</span> building
                enterprise applications using <span className="highlight">C#</span>, <span className="highlight">.NET</span>, and <span className="highlight">React</span>.
                I'm passionate about transitioning into <span className="highlight">AI Engineering</span> to combine my strong development background
                with cutting-edge machine learning technologies.
              </p>
              <p>
                My professional experience includes designing and implementing scalable web applications, working with
                SQL databases, and deploying solutions on <span className="highlight">Azure Cloud</span>. Now, I'm expanding into
                <span className="highlight"> AI Engineering</span>, learning to integrate advanced language models, build intelligent
                automation systems, and create AI-powered applications that enhance user experiences.
              </p>
              <p>
                This unique blend of enterprise development experience and emerging AI engineering skills positions me to build
                production-ready, intelligent systems. I bring the software engineering discipline needed to deploy AI solutions
                that are scalable, maintainable, and deliver real business value.
              </p>
            </div>

            <div className="card">
              <h2>What I Do</h2>
              <ul className="expertise-list">
                <li>Develop enterprise full-stack applications with C#, .NET, and React</li>
                <li>Design and implement RESTful APIs and microservices architectures</li>
                <li>Build responsive front-end interfaces with modern JavaScript frameworks</li>
                <li>Work with SQL databases for data modeling and optimization</li>
                <li>Deploy and manage cloud solutions on Azure</li>
                <li>Learning to integrate AI capabilities and build intelligent automation systems</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="skills-title">Technical Skills</h2>
            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                  <span className="skill-category">{skill.category}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
