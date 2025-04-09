import React, { useEffect } from "react";
import { motion } from "framer-motion";

function projectCard({project, currentProject, index}) {

  return (
    <motion.div 
      className="singleProject" 
      animate={index == currentProject ? {opacity: 1} : {opacity: .5}}>
      <p>{project.nome}</p>
      <div id="project-img">
        <img src={project.img} alt="" />
      </div>
      <ul id="projectTecnologies">
        {project.tecnologias.map((x) => (
          <li>
            <img src={x} />
          </li>
        ))}
      </ul>
      <p className="project-description">{project.descricao}</p>
      <div className="project-actions">
        {project.site
          ? (<button disabled={index == currentProject}>
              <a href={project.site} target="__blank">Site</a>
            </button>)
          : (<button className="link_disabled-btn" disabled={index == currentProject}>
              <a>Site</a>
            </button>)}
        
        <button disabled={index == currentProject}>
          <a href={project.gitHub} target="__blank">GitHub</a>
        </button>
      </div>
    </motion.div>
  );
}

export default projectCard;
