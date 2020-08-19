import React from "react";
import projects from "../../projects.json";
import Project from "../../components/project/project";
import { motion } from "framer-motion";
import classes from "./projects.module.css";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }, 
};

const Projects = () => {
  return (
    <div className={classes.projectsWrapper}>
      <motion.div
        className={classes.projects}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.name}
            imageUrl={project.imageUrl}
            github={project.githubLink}
            liveDemo={project.demoLink}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
