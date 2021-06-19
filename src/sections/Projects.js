import React from 'react';
import SubtopicSection from '../components/common/SubtopicSection';
import Project from '../components/cards/Project';
import {listOfProjects} from '../data/projects';

import '../styles/projects.css';

const Projects = () => {
  return (
    <section className="contact px-4" id="projects">
      <SubtopicSection>Proyectos</SubtopicSection>
      <p className="mt-3 pb-4">
        Bienvenido a mi portafolio, aquí te muestro algunos de mis trabajos,
        espero que te llame la atención y los disfrutes. Si gustas puedes ir
        a visitar mis repositorios de GitHub.
      </p>
      <div className="row row-cols-lg-2 g-4">
        { listOfProjects !== null &&
          listOfProjects.map((informationProject, index) =>
            <div className="d-flex flex-wrap justify-content-between" key={ index }>
              <Project
                title={ informationProject.title }
                listOfTechnologies={ informationProject.technologies }
                nameImage={ informationProject.nameImg }
                information={ informationProject.information }
                preview={ informationProject.linkToPreview }
                repository={ informationProject.linkToRepository }
                key={ index }
              />
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Projects;